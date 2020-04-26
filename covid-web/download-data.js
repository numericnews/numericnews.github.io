Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const utils_1 = require("./utils");
class DownloadData {
    constructor(list, url, filter, postDownload) {
        this.initializing = false;
        this.initialized = false;
        this.list = list;
        this.url = url;
        this.filter = filter;
        this.postDownload = postDownload;
    }
    async init() {
        const list = this.list;
        const url = this.url;
        const filter = this.filter;
        if (this.initialized)
            return;
        while (this.initializing)
            await utils_1.delay(1);
        this.initializing = true;
        if (this.initialized)
            return;
        const data = await axios_1.default.get(url);
        for (const p of data.data) {
            if (this.filter(p))
                list.push(p);
        }
        await this.postDownload();
        this.initialized = true;
        this.initializing = false;
    }
}
exports.DownloadData = DownloadData;
//# sourceMappingURL=download-data.js.map