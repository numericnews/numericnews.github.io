Object.defineProperty(exports, "__esModule", { value: true });
const totaleCasi_1 = require("./totaleCasi");
const provinces_1 = require("./provinces");
const tamponi_1 = require("./tamponi");
async function main() {
    const field = process.argv[2];
    if (field == "list-provinces") {
        for (const p of totaleCasi_1.getProvinces()) {
            console.log(`'${p}'`);
        }
        process.exit(1);
    }
    if (field == "list-regions") {
        for (const p of totaleCasi_1.getRegions()) {
            console.log(`'${p}'`);
        }
        process.exit(1);
    }
    const provincesByArgv = process.argv.slice(3);
    const selectedProvinces = provincesByArgv.length ? provincesByArgv : ["catania", "roma"];
    if (!["denominazione_provincia", "denominazione_regione"].includes(field))
        throw new Error("Wrong field");
    await provinces_1.init();
    const { options, data } = await tamponi_1.testsPlot(field, selectedProvinces, 0);
    console.log(`var options = ${JSON.stringify(options)};`);
    console.log(`var plot = ${JSON.stringify(data)};`);
}
main()
    .then(a => 0)
    .catch(err => { console.log("Error in main()", err); throw err; });
//# sourceMappingURL=index.js.map