
import * as _ from 'lodash'

import moment = require('moment')
import { generalPlot, getProvinces, getRegions, generalPlotGrowthRate, projectGeneralPlot } from './totaleCasi'
import {init as initProvinces } from './provinces'
import { testsPlot } from './tamponi'

interface IProvince {
    "data": string,
    "stato": string,
    "codice_regione": number,
    "denominazione_regione": string,
    "codice_provincia": 69,
    "denominazione_provincia": string,
    "sigla_provincia": string,
    "lat": number,
    "long": number,
    "totale_casi": 0,
    "note_it": string,
    "note_en": string
}

async function main() {

    const field = process.argv[2]

    if (field == "list-provinces") {
        for (const p of getProvinces()) {
            console.log(`'${p}'`)
        }
        process.exit(1)
    }
    if (field == "list-regions") {
        for (const p of getRegions()) {
            console.log(`'${p}'`)
        }
        process.exit(1)
    }

    const provincesByArgv = process.argv.slice(3)

    const selectedProvinces =  provincesByArgv.length ? provincesByArgv : ["catania", "roma"]

    if (!["denominazione_provincia", "denominazione_regione"].includes(field)) 
        throw new Error("Wrong field")

    await initProvinces()

    //    const {options, data} = await testsPlot(field as any, selectedProvinces, 0)
    //    console.log(`var options = ${JSON.stringify(options)};`)
    //    console.log(`var plot = ${JSON.stringify(data)};`)

//    const {options,data} = await generalPlot(field as any, selectedProvinces)
//    console.log(`var options = ${JSON.stringify(options)};`)
//    console.log(`var plot = ${JSON.stringify(data)};`)
//
     const projPlot = await projectGeneralPlot(field as any, selectedProvinces, new Date("2020-03-14"))
     console.log(`var options = ${JSON.stringify(projPlot.options)};`)
     console.log(`var plot = ${JSON.stringify(projPlot.data)};`)


}
main()
    .then(a => 0)
    .catch(err => { console.log("Error in main()", err); throw err; })
