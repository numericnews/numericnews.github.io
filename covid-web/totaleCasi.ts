
import * as _ from 'lodash'

import { Provinces as ProtCivProvinces, init as initProvinces, provincesToRegions } from './provinces'
import { IRegion, init as initRegions, Regions } from './regions'
import moment = require('moment')

import randomcolor = require('randomcolor')
import Dygraph from 'dygraphs';
import { AssertionError } from 'assert';
import { IR0, IAllR0 } from './r0';

import { average, max2 } from './analyze'

export interface IProvince {
    "data": string,
    "stato": string,
    "codice_regione": number,
    "denominazione_regione": string,
    "codice_provincia": number,
    "denominazione_provincia": string,
    "sigla_provincia": string,
    "lat": number,
    "long": number,
    "totale_casi": number,
    "note_it": string,
    "note_en": string
}

export const Provinces: IProvince[] = ProtCivProvinces

const colorSeed = 1

// Filter used to select particular provinces or regions (field = denominazione_provincia or denominazione_regione)
// If prov == italia, it selects any province or region
export function filter(field: 'denominazione_provincia' | 'denominazione_regione', prov: string, p: IProvince) {
    if (prov.toLowerCase() == "italia")
        return true // any match
    else
        return p[field].toLowerCase() == prov
}

    /*
export async function plotR0(field: 'denominazione_provincia' | 'denominazione_regione', selectedProvinces: string[]) {
    const columns = [
        { label: 'Data', id: 'Data', type: 'date' }
    ].concat(
        selectedProvinces.map(prov => 
            ({ label: prov, id: prov, type: 'number' })
        )
    )

    const data : IAllR0 = require("./all-r0.js")

    const map = new Map<string, number[]>()

    for (let provIdx = 0; provIdx < selectedProvinces.length; provIdx++) {

        const prov = selectedProvinces[provIdx]

        let r0Data : IR0

        if (field == 'denominazione_provincia') {
            r0Data = data.provinces.find(p => p.province.toLowerCase() == prov.toLowerCase())
        } else if (field == 'denominazione_regione') {
            r0Data = data.regions.find(p => p.province.toLowerCase() == prov.toLowerCase())
        }

        if (!r0Data)
            continue
    
        for (let i = 0; i < r0Data.x.length; i++) {
            const x = r0Data.x[i]
            const r0 = r0Data.r0[i]
            let row : number[] = map.get(x)
            if (!row) {
                row = _.range(0, selectedProvinces.length + 1).map(a => null)
                row[0] = new Date(x) as any
                map.set(x, row)
            }
            row[provIdx+1] = r0
        }
    }

    return {
        options: {},
        data: [columns].concat(
            [...map.values()]
                .sort((a: any, b: any) =>
                        a[0].getTime() - b[0].getTime()) as any)
    }

}
     */

export async function generalPlot(
                field: 'denominazione_provincia' | 'denominazione_regione',
                selectedProvinces: string[],
                data: (IProvince | IRegion)[] = null,
                getY : ((p: IProvince | IRegion) => number)  = null
) : Promise<IGeneralPlot> {

    if (data == null)
        data = Provinces

    const plots = []

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
        selectedProvinces.length > 10 ? randomcolor({ count: selectedProvinces.length - 10, seed: colorSeed }) : []
    )

    let trackOptions = {}

    let columns = [
        { label: 'Data', id: 'data', type: 'date' }
    ]

    for (let prov of selectedProvinces) {
        const origProvName = _.upperFirst(prov)
        columns.push({ label: origProvName, id: origProvName, type: 'number' })
        columns.push({ label: "velocita' " + origProvName, id: "vel::" + origProvName, type: 'number' })
    }

    plots.push(columns)

    const rows = []

    const allPlots = []
    const allVelPlots = []
    let i = 0
    let ci = 0
    for (let prov of selectedProvinces) {

        const origProvName = _.upperFirst(prov)
        prov = prov.toLowerCase()

        const plot_: any = plot(data, p => filter(field, prov,p), origProvName, 'scatter', getY)
        allPlots.push(plot_)
        trackOptions[columns[i + 1].label] = { color: colors[ci] }

        i++

        const velPlot: any =
            plotVelocity(data, p => filter(field, prov, p), "velocita' " + origProvName, 'scatter', getY)
        allVelPlots.push(velPlot)
        trackOptions[columns[i + 1].label] = { color: colors[ci], strokePattern: [10, 2, 5, 2] }

        i++

        ci++
    }

    let X = null
    for (let j = 0; j < selectedProvinces.length; j++) {
        if (!X)
            X = allPlots[j].x
        else {
            if (!_.isEqual(X, allPlots[j].x) ||
                !_.isEqual(X, allVelPlots[j].x)
            )
                throw new Error("Inconsiste X axes " + JSON.stringify([columns[j - 1], columns[j]]))
            X = allPlots[j].x
        }
    }

    for (let i = 0; i < allPlots[0].x.length; i++) {
        const x = allPlots[0].x[i]
        const row = [new Date(x)]
        for (let j = 0; j < selectedProvinces.length; j++) {
            row.push(allPlots[j].y[i])
            row.push(allVelPlots[j].y[i])
        }
        rows.push(row)
    }

    return { options: trackOptions, data: [columns].concat(rows) }
}

export interface IGeneralPlot {
    data: any[], // gviz format
    options: { [key: string]: { color: string, strokePattern?: number[] } }
}

/*
    selectedProvincesLength: numero di province/regioni nel plot basePlot,
    startDate: data da cui iniziare la proiezione
 */
export async function projectGeneralPlot(
    field: 'denominazione_provincia' | 'denominazione_regione',
    selectedRegions: string[],
    startDate: Date = null) {

    await initProvinces()
    await initRegions()

    const italia = selectedRegions.find(r => r.toLowerCase() == "italia")

    if (field == 'denominazione_provincia') {

        selectedRegions = provincesToRegions(selectedRegions)

        if (italia)
            selectedRegions.push(italia)
    }

    const genPlot : IGeneralPlot = await generalPlot('denominazione_regione', selectedRegions)
    const growthRatePlot : IGeneralPlot = await generalPlotGrowthRate("denominazione_regione", selectedRegions)
    const totalePositiviPlot : IGeneralPlot = await generalPlot('denominazione_regione', selectedRegions, Regions, (p : IRegion) => p.totale_positivi)
    const basePlot = genPlot
    const selectedProvincesLength = selectedRegions.length

    let latestDate = basePlot.data.slice(-1)[0][0]
    let startIdx
    if (startDate) {
        // find the nearest date to startDate
        const di = basePlot.data.findIndex((d,i) => i > 0 && Math.abs(d[0].getTime()-startDate.getTime()) <= moment.duration(0.5, 'day').asMilliseconds())
        const d = basePlot.data[di]
        if (di < 0) {
            startDate = latestDate
            startIdx = -1
        } else {
            startDate = d[0]
            startIdx  = di
        }
    } else {
       const getAvg = (data) => {
            const avg = _.range(0, data[1].length - 1).map(a => null)
            for (let j = 1; j < data[1].length; j++) {
             let averaged = 0
             for(let i = 1; i < data.length; i++) {
                   if (!_.isFinite(data[i][j]))
                     continue
                   avg[j] += data[i][j]
                   averaged++
             }
             avg[j] /= averaged
            }
            return average(avg.filter(_.isFinite))
        }
        const getNearestIdx = (data, y) => {
            let md = +Infinity
            let mi = -1
            for (let j = 1; j < data[1].length; j++) {
             for(let i = 1; i < data.length; i++) {
                 if (!_.isFinite(data[i][j]))
                     continue
                 if (Math.abs(data[i][j]-y) < md) {
                     md = Math.abs(data[i][j]-y)
                     mi = i
                 }
             }
            }
            return {i: mi, y: md}
        }
        const D = growthRatePlot.data
        const ni = getNearestIdx(D, getAvg(D))
        if (ni.i >= 0) {
            startDate = D[ni.i][0]
            startIdx = ni.i
        } else {
            startDate = latestDate 
            startIdx = -1
        }
    }
    const columns = 2 * selectedProvincesLength + 1

    const projection = plotProjection(
        columns,
        genPlot.data,
        totalePositiviPlot.data,
        growthRatePlot.data.slice(startIdx)[0].slice(1), // growth rates of each plot, at date startDate
        startDate,
        Math.max(moment(latestDate).diff(startDate, 'days'), 30)
    )

    const projColumns = basePlot.data[0].slice(1).map(
        c => Object.assign({}, { label: "pro. " + c.label, id: "pro. " + c.label })
    )
    const newRows = projection

    const getMax = (data) => {
        const maxYs = data[0].map((a,i) =>
                        i == 0 ? 0 : max2(data.map((r,j) => j == 0 ? 0 : r[i]).filter(_.isFinite)).max)
        const maxY = Math.max(...maxYs)
        return maxY
    }

    const data = [basePlot.data[0].concat(projColumns)].concat(newRows)

    const dataMax = getMax(basePlot.data)
    const projDataMax = getMax(data)
    const safeMax = projDataMax > dataMax ? Math.min(4*dataMax, projDataMax) : dataMax

    return {
        options: Object.assign(
                    _.mapValues(basePlot.options, (v, k, i) => { (/velocit/i.test(k) ? delete v.strokePattern : ''); return v; }), 
                    _.mapValues(
                        _.mapKeys(basePlot.options, (v, k, i) => "pro. " + k),
                        o => Object.assign({}, o, { strokePattern: [10, 2, 5, 2] }))),
        data,
        startDate,
        startIdx,
        gr: growthRatePlot.data.slice(startIdx)[0].slice(1, -1),
        safeMax,
        series: growthRatePlot.data[0].slice(1, -1).map(c => c.label),
        maxDate: basePlot.data.slice(-1)[0][0]

    }
}

export async function generalPlotGrowthRate(field: 'denominazione_provincia' | 'denominazione_regione', selectedProvinces: string[]) {

    const plots = []

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
        selectedProvinces.length > 10 ? randomcolor({ count: selectedProvinces.length - 10, seed: colorSeed }) : []
    )

    let trackOptions = {}

    let columns = [
        { label: 'Data', id: 'data', type: 'date' }
    ]

    for (let prov of selectedProvinces) {
        const origProvName = _.upperFirst(prov)
        columns.push({ label: origProvName, id: origProvName, type: 'number' })
    }

    columns.push({ label: 'y=1', id: 'y=1', type: 'number' })

    plots.push(columns)

    const rows = []

    const allPlots = []
    let i = 0
    for (let prov of selectedProvinces) {

        const origProvName = _.upperFirst(prov)
        prov = prov.toLowerCase()

        const plot_: any = plotGrothRate(Provinces, p => filter(field, prov, p), origProvName, 'scatter')
        allPlots.push(plot_)
        trackOptions[columns[i + 1].label] = { color: colors[i] }
        i++
    }

    let X = null
    for (let j = 0; j < selectedProvinces.length; j++) {
        if (!X)
            X = allPlots[j].x
        else {
            if (!_.isEqual(X, allPlots[j].x))
                throw new Error("Inconsiste X axes " + JSON.stringify([columns[j - 1], columns[j]]))
            X = allPlots[j].x
        }
    }

    for (let i = 0; i < allPlots[0].x.length; i++) {
        const x = allPlots[0].x[i]
        const row: (Date | number)[] = [new Date(x)]
        for (let j = 0; j < selectedProvinces.length; j++) {
            row.push(allPlots[j].y[i])
        }
        row.push(1)
        rows.push(row)
    }

    return { options: trackOptions, data: [columns].concat(rows) }
}

export function plot(Provinces: IProvince[], filter: (p: IProvince) => boolean, name: string, plotType: 'scatter', getY = (p) => p.totale_casi) {

    if (getY == null)
        getY = (p) => p.totale_casi

    const map = new Map<string, number>()

    for (const p of Provinces) {

        if (filter(p)) {

            let y

            if (map.has(p.data))
                y = map.get(p.data)
            else
                y = 0

            y += getY(p)

            map.set(p.data, y)
        }
    }

    const X = []
    const Y = []

    for (const [x, y] of map) {
        X.push(x)
        Y.push(y)
    }

    return { x: X, y: Y, type: plotType, name }
}

// plots the velocity of the given plot. 
// note: if the given plot is already a velocity, the return plot is the accelaration
export function _plotVelocity(P: { x: string[], y: number[] }) {

    let y0 = 0

    const vY = []

    for (let i = 0; i < P.x.length; i++) {
        const x = P.x[i]
        const y = P.y[i]

        const dy = y - y0
        y0 = y

        vY.push(dy)
    }

    P.y = vY

    return P
}

export function plotVelocity(Provinces: IProvince[], filter: (p: IProvince) => boolean, name: string, plotType: 'scatter', getY = (p) => p.totale_casi) {
    const P = plot(Provinces, filter, name, plotType, getY)
    return _plotVelocity(P)
}


function plotGrothRate(Provinces: IProvince[], filter: (p: IProvince) => boolean, name: string, plotType: 'scatter') {

    const PT = plot(Provinces, filter, name, plotType)
    const V = _plotVelocity(PT)

    const gY = []

    for (let i = 0; i < V.x.length; i++) {
        const v0 = i > 0 ? V.y[i-1] : 0
        const v1 = V.y[i]
        gY.push(v1 / v0)
    }

    PT.y = gY

    return PT
}

const oneDayMs = moment.duration(1, 'days').asMilliseconds()

// http://katolaz.net/covid-2019/growth.html
// r = growth rate of the last day recorded = 1 + p
// I(t) = totale casi at day t
function plotProjection(
    columns: number, // how many columns
    realPlots: (number | Date)[][], // all plots, in gviz format.
    totalePositiviPlot: (number | Date)[][],
    growthRates: number[],
    startDate: Date,
    days: number) {

    realPlots = realPlots.slice(1).map(r => r.slice())

    if (!(columns > 1 && columns % 2 == 1))
        throw new Error("Invalid columns number. Columns should be: Date, Prov1, Vel1, Prov2, Vel2, ... So it should be > 0 and odd")

    let v = realPlots.findIndex(P => (P[0] as Date).getTime() == startDate.getTime())

    let I0: number[] = v < 0 ?
        _.range(0, columns).map((v, i) => i % 2 == 1 ? 0 : 1) : // Initial vector with 1 infected person per province/region and velocity 0
        (totalePositiviPlot[v] as number[]).slice() // Initial vector from day 'startDate'

    const nullRow = _.range(0, columns - 1).map(a => null)

    for (let d = 0; d < v; d++) {
        // add null value to rows without projection
        realPlots[d] = realPlots[d].concat(nullRow.slice())
    }

    realPlots[v] = realPlots[v].concat(realPlots[v].slice(1))

    const origRealPlot = realPlots.slice(v + 1).map(r => r.slice())

    const dEnd = Math.max(days, realPlots.length-v-1)

    for (let d = 1; d < dEnd + 1; d++) {

        const i = v + d

        realPlots[i] = realPlots[i] || []

        realPlots[i][0] = new Date(startDate.getTime() + oneDayMs * d)

        for (let j = 1; j < columns; j += 2) {

            const gj = Math.floor(j / 2)

            const prevI = i > v + 1 ? realPlots[i-1][j] as number : I0[j]

            // velocity = I(t) - I(t-1) = p * I(t-1) = (r-1) * I(t-1)
            // or if you want, you may find it by:
            //   velocity = I(t) - I(t-1) = r**t * I0 - r**(t-1) * I0 = r**(t-1) * I0 * (r-1) = I(t-1) * (r-1)
            realPlots[i][j + 1] =
                growthRates[gj] >= 1 ? 
                    prevI * (growthRates[gj] - 1) :
                    null // the decrease in velocity is not projected

            const vel = realPlots[i][j + 1] as number
            realPlots[i][j] = prevI + vel
        }

    }

    for (let d = 1; d < dEnd + 1; d++) {
        const i = v + d
        const oi = d - 1
        realPlots[i] = [realPlots[i][0]]
                            .concat(oi < origRealPlot.length ? origRealPlot[oi].slice(1) : nullRow.slice())
                            .concat(realPlots[i].slice(1))
    }

    return realPlots

}

export function getProvinces(): string[] {
    return [...(new Set(
        Provinces.map(p => p.denominazione_provincia)
    ))]
}
export function getRegions(): string[] {
    return [...(new Set(
        Provinces.map(p => p.denominazione_regione)
    ))]
}

