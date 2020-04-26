import { Provinces, init as initProvinces, provincesToRegions } from './provinces'
import { Regions, init as initRegions } from './regions'
import { IProvince, plotVelocity, generalPlot, plot, filter, getRegions } from './totaleCasi'
import randomcolor = require('randomcolor')
import * as _ from 'lodash'
import moment = require('moment')

const colorSeed = 1

// plot dei tamponi effettuati
export async function testsPlot(field: 'denominazione_provincia' | 'denominazione_regione', selectedRegions: string[], offset: number) {

    await initProvinces()
    await initRegions()

    const plots = []
    
    const regionCount = getRegions().length

    const italia = selectedRegions.find(r => r.toLowerCase() == "italia")

    if (field == 'denominazione_provincia') {

        selectedRegions = provincesToRegions(selectedRegions)

        if (italia)
            selectedRegions.push(italia)
    }

    let colors: string[] = [
        '#1f77b4',  // muted blue
        '#ff7f0e',  // safety orange
        '#2ca02c',  // cooked asparagus green
        '#d62728',  // brick red
        '#9467bd',  // muted purple
        '#8c564b',  // chestnut brown
        '#e377c2',  // raspberry yogurt pink
        '#7f7f7f',  // middle gray
        '#bcbd22',  // curry yellow-green
        '#17becf'   // blue-teal
    ].concat(
        selectedRegions.length > 10 ? randomcolor({ count: selectedRegions.length - 10, seed: colorSeed }) : []
    )

    let trackOptions = {}

    let columns = [
        { label: 'Data', id: 'data', type: 'date' }
    ]

    for (let prov of selectedRegions) {
        const origProvName = _.upperFirst(prov)
        columns.push({ label: origProvName, id: origProvName, type: 'number' })
        //columns.push({ label: "nuovi casi " + origProvName, id: "nuovi casi " + origProvName, type: 'number' }),
        columns.push({ label: "percentuale " + origProvName, id: "percentuale " + origProvName, type: 'number' })
    }

    plots.push(columns)

    // firstCasiTestatiMap: regione -> unix timestamp of the date where all provinces/regions have 
    // the "casi_totali" field for the first time
    let firstCasiTestatiMap : Map<string,number> = new Map()

    const rows = []

    const allPlots = []
    const allPosPlots = []
    const allPercPlots = []
    let i = 0
    let ci = 0
    for (let prov of selectedRegions) {

        const origProvName = _.upperFirst(prov)
        prov = prov.toLowerCase()

        // casi_testati
        const plot_: any = await plotVelocity(
            Regions,
            p => filter("denominazione_regione", prov, p),
            origProvName,
            'scatter',
            p => { 
                if (_.isNumber(p.casi_testati)) {

                    const first = firstCasiTestatiMap.get(p.denominazione_regione)
                    if (!first)
                        firstCasiTestatiMap.set(p.denominazione_regione, new Date(p.data).getTime())

                    return p.casi_testati

                } else {

                    return null

                }
            }
        )

        // tamponi
        const plotT_: any = await plotVelocity(
            Regions,
            p => filter("denominazione_regione", prov, p),
            origProvName,
            'scatter',
            p => p.tamponi 
        )

        // tamponi incollati a casi_testati, a partire dal punto in cui esistono i casi testati
        {
            const i = plot_.x.findIndex((x,i) => i > 0 && plot_.y[i])
            plot_.y = plotT_.y.slice(0,i).concat(plot_.y.slice(i))
            plot_.y[i] = null // non sappiamo i casi_totali del giorno prima, quindi non abbiamo 
            // la velocita' in i.
        }

        allPlots.push(plot_)
        trackOptions[columns[i + 1].label] = { color: colors[ci] }


        i++

        const positivesPlot: any =
                await plot(Regions,
                    p => filter("denominazione_regione", prov, p),
                    "nuovi casi " + origProvName,
                    'scatter',
                    p => p.nuovi_positivi)
        //normalizeY(positivesPlot)

        // allPosPlots.push(positivesPlot)
        //trackOptions[columns[i + 1].label] = { color: colors[ci], strokePattern: [10, 2, 5, 2] }
        //i++

        const percPlot = {
            x: plot_.x.slice(),
            y: positivesPlot.y.slice().map((y, i) => {            
                return y / plot_.y[i] * 100
            })
        }
        if (italia && prov.toLowerCase() == 'italia') {
            // non tutte le regioni hanno iniziato a fornire i casi_totali nello stesso giorno.
            // metti le percentuali solo a partire dal primo giorno in cui tutti hanno casi_totali.
            // Nei giorni precedenti, usa i tamponi.
            const firstAll = 
                firstCasiTestatiMap.size == regionCount &&
                Math.max(...firstCasiTestatiMap.values())
            const firstAny = Math.min(...firstCasiTestatiMap.values())
            const i = percPlot.x.findIndex((x,i) => i > 0 && new Date(x).getTime() == firstAny)
            const j = percPlot.x.findIndex((x,i) => i > 0 && new Date(x).getTime() == firstAll)
            percPlot.y = percPlot.y.slice(0, i)
                .concat(_.range(i,j).map(y => null))
                .concat(percPlot.y.slice(j))
        }
        allPercPlots.push(percPlot)

        trackOptions[columns[i + 1].label] = { color: colors[ci], strokePattern: [2,2,2,2] }

        i++

        ci++
    }

    let X = null
    for (let j = 0; j < selectedRegions.length; j++) {
        if (!X)
            X = allPlots[j].x
        else {
            if (!_.isEqual(X, allPlots[j].x) ||
                !_.isEqual(X, allPercPlots[j].x))
                throw new Error("Inconsistent X axes " + JSON.stringify([columns[j - 1], columns[j]]))
            X = allPlots[j].x
        }
    }

    for (let i = 0; i < allPlots[0].x.length; i++) {
        const x = allPlots[0].x[i]
        const row = [new Date(x)]
        for (let j = 0; j < selectedRegions.length; j++) {
            row.push(allPlots[j].y[i])
            row.push(allPercPlots[j].y[i])
        }
        rows.push(row)
    }

    return { options: trackOptions, data: [columns].concat(rows), firstCasiTestatiMap }
}

function offsetX(offset: number, plot: { x: number[], y: number[] }) {
    for (let i = 0; i < plot.x.length; i++) {
        plot.x[i] = moment(plot.x[i]).add(offset, 'days').toDate() as any
    }
    return plot
}

import { max2 } from './analyze'

function normalizeY(plot: { x: number[], y: number[] }) {
    const m = max2(plot.y)
    plot.y = plot.y.map(y => y / m.max)
}

function filterNegativeValues(plot : { x: number[], y: number[] }) {
    plot.y = plot.y.map(y => y >= 0 ? y : null)
}
