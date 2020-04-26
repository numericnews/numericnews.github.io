Object.defineProperty(exports, "__esModule", { value: true });
const provinces_1 = require("./provinces");
const regions_1 = require("./regions");
const totaleCasi_1 = require("./totaleCasi");
const randomcolor = require("randomcolor");
const _ = require("lodash");
const moment = require("moment");
const colorSeed = 1;
async function testsPlot(field, selectedRegions, offset) {
    await provinces_1.init();
    await regions_1.init();
    const plots = [];
    const regionCount = totaleCasi_1.getRegions().length;
    const italia = selectedRegions.find(r => r.toLowerCase() == "italia");
    if (field == 'denominazione_provincia') {
        selectedRegions = provinces_1.provincesToRegions(selectedRegions);
        if (italia)
            selectedRegions.push(italia);
    }
    let colors = [
        '#1f77b4',
        '#ff7f0e',
        '#2ca02c',
        '#d62728',
        '#9467bd',
        '#8c564b',
        '#e377c2',
        '#7f7f7f',
        '#bcbd22',
        '#17becf'
    ].concat(selectedRegions.length > 10 ? randomcolor({ count: selectedRegions.length - 10, seed: colorSeed }) : []);
    let trackOptions = {};
    let columns = [
        { label: 'Data', id: 'data', type: 'date' }
    ];
    for (let prov of selectedRegions) {
        const origProvName = _.upperFirst(prov);
        columns.push({ label: origProvName, id: origProvName, type: 'number' });
        columns.push({ label: "percentuale " + origProvName, id: "percentuale " + origProvName, type: 'number' });
    }
    plots.push(columns);
    let firstCasiTestatiMap = new Map();
    const rows = [];
    const allPlots = [];
    const allPosPlots = [];
    const allPercPlots = [];
    let i = 0;
    let ci = 0;
    for (let prov of selectedRegions) {
        const origProvName = _.upperFirst(prov);
        prov = prov.toLowerCase();
        const plot_ = await totaleCasi_1.plotVelocity(regions_1.Regions, p => totaleCasi_1.filter("denominazione_regione", prov, p), origProvName, 'scatter', p => {
            if (_.isNumber(p.casi_testati)) {
                const first = firstCasiTestatiMap.get(p.denominazione_regione);
                if (!first)
                    firstCasiTestatiMap.set(p.denominazione_regione, new Date(p.data).getTime());
                return p.casi_testati;
            }
            else {
                return null;
            }
        });
        const plotT_ = await totaleCasi_1.plotVelocity(regions_1.Regions, p => totaleCasi_1.filter("denominazione_regione", prov, p), origProvName, 'scatter', p => p.tamponi);
        {
            const i = plot_.x.findIndex((x, i) => i > 0 && plot_.y[i]);
            plot_.y = plotT_.y.slice(0, i).concat(plot_.y.slice(i));
            plot_.y[i] = null;
        }
        allPlots.push(plot_);
        trackOptions[columns[i + 1].label] = { color: colors[ci] };
        i++;
        const positivesPlot = await totaleCasi_1.plot(regions_1.Regions, p => totaleCasi_1.filter("denominazione_regione", prov, p), "nuovi casi " + origProvName, 'scatter', p => p.nuovi_positivi);
        const percPlot = {
            x: plot_.x.slice(),
            y: positivesPlot.y.slice().map((y, i) => {
                return y / plot_.y[i] * 100;
            })
        };
        if (italia && prov.toLowerCase() == 'italia') {
            const firstAll = firstCasiTestatiMap.size == regionCount &&
                Math.max(...firstCasiTestatiMap.values());
            const firstAny = Math.min(...firstCasiTestatiMap.values());
            const i = percPlot.x.findIndex((x, i) => i > 0 && new Date(x).getTime() == firstAny);
            const j = percPlot.x.findIndex((x, i) => i > 0 && new Date(x).getTime() == firstAll);
            percPlot.y = percPlot.y.slice(0, i)
                .concat(_.range(i, j).map(y => null))
                .concat(percPlot.y.slice(j));
        }
        allPercPlots.push(percPlot);
        trackOptions[columns[i + 1].label] = { color: colors[ci], strokePattern: [2, 2, 2, 2] };
        i++;
        ci++;
    }
    let X = null;
    for (let j = 0; j < selectedRegions.length; j++) {
        if (!X)
            X = allPlots[j].x;
        else {
            if (!_.isEqual(X, allPlots[j].x) ||
                !_.isEqual(X, allPercPlots[j].x))
                throw new Error("Inconsistent X axes " + JSON.stringify([columns[j - 1], columns[j]]));
            X = allPlots[j].x;
        }
    }
    for (let i = 0; i < allPlots[0].x.length; i++) {
        const x = allPlots[0].x[i];
        const row = [new Date(x)];
        for (let j = 0; j < selectedRegions.length; j++) {
            row.push(allPlots[j].y[i]);
            row.push(allPercPlots[j].y[i]);
        }
        rows.push(row);
    }
    return { options: trackOptions, data: [columns].concat(rows), firstCasiTestatiMap };
}
exports.testsPlot = testsPlot;
function offsetX(offset, plot) {
    for (let i = 0; i < plot.x.length; i++) {
        plot.x[i] = moment(plot.x[i]).add(offset, 'days').toDate();
    }
    return plot;
}
const analyze_1 = require("./analyze");
function normalizeY(plot) {
    const m = analyze_1.max2(plot.y);
    plot.y = plot.y.map(y => y / m.max);
}
function filterNegativeValues(plot) {
    plot.y = plot.y.map(y => y >= 0 ? y : null);
}
//# sourceMappingURL=tamponi.js.map