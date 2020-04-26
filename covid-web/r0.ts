import { getProvinces, getRegions, plotVelocity } from "./totaleCasi"
import { init, Provinces } from "./provinces"
import { writeFileSync, readFileSync } from "fs"
import { execSync } from "child_process"
import moment = require("moment")

export interface IR0 {
    province: string
    x: string[]
    r0: number[]
    reset: number[]
}

export interface IAllR0 { provinces: IR0[], regions: IR0[] }

function jsonToJs(all: any) {
    return "module.exports = " + JSON.stringify(all)
}

function assert(condition, message) {
    if (!condition)
        throw new Error(message)
}

async function main() {

    await init()

    const provinces = getProvinces()
    const regions = getRegions()

    const all: Partial<IAllR0> = { provinces: [], regions: [] }

    for (const prov of provinces) {

        console.log(prov)

        const ret = process("denominazione_provincia", prov)

        assert(ret.x.length == ret.r0.length, 'x != r0')

        all.provinces.push(Object.assign({
            province: prov
        }, ret))

        writeFileSync("all-r0.js", jsonToJs(all))
    }

    for (const region of regions) {

        console.log(region)

        const ret = process("denominazione_regione", region)

        assert(ret.x.length == ret.r0.length, 'x != r0')

        all.regions.push(Object.assign({
            province: region
        }, ret))

        writeFileSync("all-r0.js", jsonToJs(all))
    }
}

function process(field: string, province: string) {

    const velocity = plotVelocity(
        Provinces,
        p => p[field] == province,
        field+" "+province,
        "scatter")
    velocity.y = velocity.y.map(y => y < 0 ? 0 : y) // filter bad data

    writeFileSync("/tmp/covid-web-velocity.json", JSON.stringify(velocity))
    execSync("Rscript r0.r", {timeout: moment.duration(1, 'hour').asMilliseconds()})
    const ret = JSON.parse(readFileSync("/tmp/covid-web-r0.json").toString())

    ret.r0 = ret.r0.map(r0 => r0 == "NA" ? null : r0)
    ret.reset = ret.reset.map(r => r == "NA" ? null : r)

    return ret
}


if (require.main === module) {

    main().then(a => a).catch(console.error)

} else {
    // In this case, this source file has been sourced by another source file
}