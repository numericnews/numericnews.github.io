Object.defineProperty(exports, "__esModule", { value: true });
const download_data_1 = require("./download-data");
const moment = require("moment");
exports.Regions = [];
const url = "https://raw.githubusercontent.com/numericnews/numericnews.github.io/master/covid-web/dist/dpc-covid19-ita-regioni.json";
const downloadData = new download_data_1.DownloadData(exports.Regions, url, p => true, async () => {
    exports.Regions.sort((a, b) => moment(a.data).diff(moment(b.data), 'seconds'));
});
async function init() {
    await downloadData.init();
}
exports.init = init;
//# sourceMappingURL=regions.js.map