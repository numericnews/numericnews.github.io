import  Axios  from 'axios'
import { delay } from './utils'


export class DownloadData {

    initializing: boolean
    initialized: boolean
    list: any[]
    url: string
    filter: (p) => boolean

    constructor(list: any[], url: string, filter: (p) => boolean) {
        this.initializing = false
        this.initialized = false
        this.list = list
        this.url = url
        this.filter = filter
    }

    async init() {
        const list = this.list
        const url = this.url
        const filter = this.filter

        if (this.initialized)
            return

        while(this.initializing)
            await delay(1)

        this.initializing = true

        if (this.initialized) // double check needed
            return

        const data = await Axios.get(url)
        for (const p of data.data) {
            if (this.filter(p))
                list.push(p)
        }

        this.initialized = true
        this.initializing = false
    }
}
