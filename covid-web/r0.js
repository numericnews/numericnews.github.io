Object.defineProperty(exports, "__esModule", { value: true });
const totaleCasi_1 = require("./totaleCasi");
const provinces_1 = require("./provinces");
const fs_1 = require("fs");
const child_process_1 = require("child_process");
const moment = require("moment");
function jsonToJs(all) {
    return "module.exports = " + JSON.stringify(all);
}
function assert(condition, message) {
    if (!condition)
        throw new Error(message);
}
async function main() {
    await provinces_1.init();
    const provinces = totaleCasi_1.getProvinces();
    const regions = totaleCasi_1.getRegions();
    const all = { provinces: [], regions: [] };
    for (const prov of provinces) {
        console.log(prov);
        const ret = process("denominazione_provincia", prov);
        assert(ret.x.length == ret.r0.length, 'x != r0');
        all.provinces.push(Object.assign({
            province: prov
        }, ret));
        fs_1.writeFileSync("all-r0.js", jsonToJs(all));
    }
    for (const region of regions) {
        console.log(region);
        const ret = process("denominazione_regione", region);
        assert(ret.x.length == ret.r0.length, 'x != r0');
        all.regions.push(Object.assign({
            province: region
        }, ret));
        fs_1.writeFileSync("all-r0.js", jsonToJs(all));
    }
}
function process(field, province) {
    const velocity = totaleCasi_1.plotVelocity(provinces_1.Provinces, p => p[field] == province, field + " " + province, "scatter");
    velocity.y = velocity.y.map(y => y < 0 ? 0 : y);
    fs_1.writeFileSync("/tmp/covid-web-velocity.json", JSON.stringify(velocity));
    child_process_1.execSync("Rscript r0.r", { timeout: moment.duration(1, 'hour').asMilliseconds() });
    const ret = JSON.parse(fs_1.readFileSync("/tmp/covid-web-r0.json").toString());
    ret.r0 = ret.r0.map(r0 => r0 == "NA" ? null : r0);
    ret.reset = ret.reset.map(r => r == "NA" ? null : r);
    return ret;
}
if (require.main === module) {
    main().then(a => a).catch(console.error);
}
else {
}
//# sourceMappingURL=r0.js.map