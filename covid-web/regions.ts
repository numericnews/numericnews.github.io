import { DownloadData } from "./download-data"
import * as moment from 'moment'

export let Regions = []

const url = "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json"

const downloadData = new DownloadData(
    Regions,
    url, 
    p => true,
    async () => { 
        Regions.sort((a, b) => moment(a.data).diff(moment(b.data), 'seconds'))
    }
)

export async function init() {

    await downloadData.init()

}
