import { DownloadData } from "./download-data"
import { max2Any } from "./utils"
import * as moment from 'moment'

export let Provinces = []

const url = "https://raw.githubusercontent.com/numericnews/numericnews.github.io/master/covid-web/dist/dpc-covid19-ita-province.json"

const downloadData = new DownloadData(
    Provinces,
    url, 
    p => true,
    async () => {
        Provinces.sort((a, b) => moment(a.data).diff(moment(b.data), 'seconds'))
    }
)

export async function init() {

    await downloadData.init()

}

export function provincesToRegions(provinces: string[]) {
    return [...new Set(
                provinces.map(p => {
                    const prov = Provinces.find(pb => pb.denominazione_provincia.toLowerCase() == p.toLowerCase() && pb.denominazione_regione)
                    if (prov) {
                        return prov.denominazione_regione.toLowerCase()
                    } else {
                        return null
                    }
                })
                    .filter(v => v))
            ]
}

export function regionsToProvinces(regions: string[]) {
    return regions
     .map(r => {
        const m = max2Any(
            Provinces.filter(p => p.denominazione_regione.toLowerCase() == r.toLowerCase() 
                                    && p.denominazione_provincia), 
                p => p.totale_casi)
        if (m.i >= 0)
            return m.element.denominazione_provincia
        else
            return null
     })
     .filter(v => v)
}
