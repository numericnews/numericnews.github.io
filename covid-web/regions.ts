import { DownloadData } from "./download-data"
import * as moment from 'moment'

export interface IRegion {
    "data": string,
    "stato": string,
    "codice_regione": number,
    "denominazione_regione": string,
    "lat": number,
    "long": number,
    "ricoverati_con_sintomi": number,
    "terapia_intensiva": number,
    "totale_ospedalizzati": number,
    "isolamento_domiciliare": number,
    "totale_positivi": number,
    "variazione_totale_positivi": -259,
    "nuovi_positivi": number,
    "dimessi_guariti": number,
    "deceduti": number,
    "totale_casi": number,
    "tamponi": number,
    "casi_testati": number,
    "note_it": string,
    "note_en": string,
}

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
