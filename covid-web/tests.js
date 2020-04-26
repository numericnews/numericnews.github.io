Object.defineProperty(exports, "__esModule", { value: true });
const provinces_1 = require("./provinces");
async function main() {
    await provinces_1.init();
    let ret = provinces_1.regionsToProvinces(["sicilia", "lombardia", "lazio", "italia"]);
    console.log(JSON.stringify(ret));
    ret = provinces_1.provincesToRegions(["catania", "milano", "roma", "italia"]);
    console.log(JSON.stringify(ret));
}
main();
//# sourceMappingURL=tests.js.map