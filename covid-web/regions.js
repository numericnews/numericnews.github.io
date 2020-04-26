Object.defineProperty(exports, "__esModule", { value: true });
const download_data_1 = require("./download-data");
const moment = require("moment");
exports.Regions = [];
const url = "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json";
const downloadData = new download_data_1.DownloadData(exports.Regions, url, p => true);
let sorted = false;
async function init() {
    await downloadData.init();
    if (!sorted) {
        exports.Regions.sort((a, b) => moment(a.data).diff(moment(b.data), 'seconds'));
        sorted = true;
    }
}
exports.init = init;
//# sourceMappingURL=regions.js.map