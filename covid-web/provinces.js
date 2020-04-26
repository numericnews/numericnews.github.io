Object.defineProperty(exports, "__esModule", { value: true });
const download_data_1 = require("./download-data");
const utils_1 = require("./utils");
exports.Provinces = [];
const url = "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province.json";
const downloadData = new download_data_1.DownloadData(exports.Provinces, url, p => true);
async function init() {
    await downloadData.init();
}
exports.init = init;
function provincesToRegions(provinces) {
    return [...new Set(provinces.map(p => {
            const prov = exports.Provinces.find(pb => pb.denominazione_provincia.toLowerCase() == p.toLowerCase() && pb.denominazione_regione);
            if (prov) {
                return prov.denominazione_regione.toLowerCase();
            }
            else {
                return null;
            }
        })
            .filter(v => v))
    ];
}
exports.provincesToRegions = provincesToRegions;
function regionsToProvinces(regions) {
    return regions
        .map(r => {
        const m = utils_1.max2Any(exports.Provinces.filter(p => p.denominazione_regione.toLowerCase() == r.toLowerCase()
            && p.denominazione_provincia), p => p.totale_casi);
        if (m.i >= 0)
            return m.element.denominazione_provincia;
        else
            return null;
    })
        .filter(v => v);
}
exports.regionsToProvinces = regionsToProvinces;
//# sourceMappingURL=provinces.js.map