import { provincesToRegions, regionsToProvinces, init } from './provinces'

async function main() {

    await init()

    let ret = regionsToProvinces([ "sicilia", "lombardia", "lazio", "italia" ])
    console.log(JSON.stringify(ret))

    ret = provincesToRegions([ "catania", "milano", "roma", "italia" ])
    console.log(JSON.stringify(ret))

}

main()
