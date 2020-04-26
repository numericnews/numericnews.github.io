Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const provinces_1 = require("./provinces");
const moment = require("moment");
const randomcolor = require("randomcolor");
exports.Provinces = provinces_1.Provinces;
exports.Provinces.sort((a, b) => moment(a.data).diff(moment(b.data), 'seconds'));
const colorSeed = 1;
function filter(field, prov, p) {
    if (prov.toLowerCase() == "italia")
        return true;
    else
        return p[field].toLowerCase() == prov;
}
exports.filter = filter;
async function generalPlot(field, selectedProvinces) {
    const plots = [];
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
    ].concat(selectedProvinces.length > 10 ? randomcolor({ count: selectedProvinces.length - 10, seed: colorSeed }) : []);
    let trackOptions = {};
    let columns = [
        { label: 'Data', id: 'data', type: 'date' }
    ];
    for (let prov of selectedProvinces) {
        const origProvName = _.upperFirst(prov);
        columns.push({ label: origProvName, id: origProvName, type: 'number' });
        columns.push({ label: "velocita' " + origProvName, id: "vel::" + origProvName, type: 'number' });
    }
    plots.push(columns);
    const rows = [];
    const allPlots = [];
    const allVelPlots = [];
    let i = 0;
    let ci = 0;
    for (let prov of selectedProvinces) {
        const origProvName = _.upperFirst(prov);
        prov = prov.toLowerCase();
        const plot_ = plot(exports.Provinces, p => filter(field, prov, p), origProvName, 'scatter');
        allPlots.push(plot_);
        trackOptions[columns[i + 1].label] = { color: colors[ci] };
        i++;
        const velPlot = plotVelocity(exports.Provinces, p => filter(field, prov, p), "velocita' " + origProvName, 'scatter');
        allVelPlots.push(velPlot);
        trackOptions[columns[i + 1].label] = { color: colors[ci], strokePattern: [10, 2, 5, 2] };
        i++;
        ci++;
    }
    let X = null;
    for (let j = 0; j < selectedProvinces.length; j++) {
        if (!X)
            X = allPlots[j].x;
        else {
            if (!_.isEqual(X, allPlots[j].x) ||
                !_.isEqual(X, allVelPlots[j].x))
                throw new Error("Inconsiste X axes " + JSON.stringify([columns[j - 1], columns[j]]));
            X = allPlots[j].x;
        }
    }
    for (let i = 0; i < allPlots[0].x.length; i++) {
        const x = allPlots[0].x[i];
        const row = [new Date(x)];
        for (let j = 0; j < selectedProvinces.length; j++) {
            row.push(allPlots[j].y[i]);
            row.push(allVelPlots[j].y[i]);
        }
        rows.push(row);
    }
    return { options: trackOptions, data: [columns].concat(rows) };
}
exports.generalPlot = generalPlot;
async function projectGeneralPlot(selectedProvincesLength, basePlot, growthRatePlot, startDate = null) {
    let latestDate = basePlot.data.slice(-1)[0][0];
    let startIdx;
    if (startDate) {
        const di = basePlot.data.findIndex((d, i) => i > 0 && Math.abs(d[0].getTime() - startDate.getTime()) <= moment.duration(0.5, 'day').asMilliseconds());
        const d = basePlot.data[di];
        if (di < 0) {
            startDate = latestDate;
            startIdx = -1;
        }
        else {
            startDate = d[0];
            startIdx = di;
        }
    }
    else {
        startDate = latestDate;
        startIdx = -1;
    }
    const columns = 2 * selectedProvincesLength + 1;
    const projection = plotProjection(columns, basePlot.data, growthRatePlot.data.slice(startIdx)[0].slice(1), startDate, Math.max(moment(latestDate).diff(startDate, 'days'), 30));
    const projColumns = basePlot.data[0].slice(1).map(c => Object.assign({}, { label: "pro. " + c.label, id: "pro. " + c.label }));
    const newRows = projection;
    return {
        options: Object.assign(_.mapValues(basePlot.options, (v, k, i) => { (/velocit/i.test(k) ? delete v.strokePattern : ''); return v; }), _.mapValues(_.mapKeys(basePlot.options, (v, k, i) => "pro. " + k), o => Object.assign({}, o, { strokePattern: [10, 2, 5, 2] }))),
        data: [basePlot.data[0].concat(projColumns)].concat(newRows)
    };
}
exports.projectGeneralPlot = projectGeneralPlot;
async function generalPlotGrowthRate(field, selectedProvinces) {
    const plots = [];
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
    ].concat(selectedProvinces.length > 10 ? randomcolor({ count: selectedProvinces.length - 10, seed: colorSeed }) : []);
    let trackOptions = {};
    let columns = [
        { label: 'Data', id: 'data', type: 'date' }
    ];
    for (let prov of selectedProvinces) {
        const origProvName = _.upperFirst(prov);
        columns.push({ label: origProvName, id: origProvName, type: 'number' });
    }
    columns.push({ label: 'y=1', id: 'y=1', type: 'number' });
    plots.push(columns);
    const rows = [];
    const allPlots = [];
    let i = 0;
    for (let prov of selectedProvinces) {
        const origProvName = _.upperFirst(prov);
        prov = prov.toLowerCase();
        const plot_ = plotGrothRate(exports.Provinces, p => filter(field, prov, p), origProvName, 'scatter');
        allPlots.push(plot_);
        trackOptions[columns[i + 1].label] = { color: colors[i] };
        i++;
    }
    let X = null;
    for (let j = 0; j < selectedProvinces.length; j++) {
        if (!X)
            X = allPlots[j].x;
        else {
            if (!_.isEqual(X, allPlots[j].x))
                throw new Error("Inconsiste X axes " + JSON.stringify([columns[j - 1], columns[j]]));
            X = allPlots[j].x;
        }
    }
    for (let i = 0; i < allPlots[0].x.length; i++) {
        const x = allPlots[0].x[i];
        const row = [new Date(x)];
        for (let j = 0; j < selectedProvinces.length; j++) {
            row.push(allPlots[j].y[i]);
        }
        row.push(1);
        rows.push(row);
    }
    return { options: trackOptions, data: [columns].concat(rows) };
}
exports.generalPlotGrowthRate = generalPlotGrowthRate;
function plot(Provinces, filter, name, plotType, getY = (p) => p.totale_casi) {
    const map = new Map();
    for (const p of Provinces) {
        if (filter(p)) {
            let y;
            if (map.has(p.data))
                y = map.get(p.data);
            else
                y = 0;
            y += getY(p);
            map.set(p.data, y);
        }
    }
    const X = [];
    const Y = [];
    for (const [x, y] of map) {
        X.push(x);
        Y.push(y);
    }
    return { x: X, y: Y, type: plotType, name };
}
exports.plot = plot;
function _plotVelocity(P) {
    let y0 = 0;
    const vY = [];
    for (let i = 0; i < P.x.length; i++) {
        const x = P.x[i];
        const y = P.y[i];
        const dy = y - y0;
        y0 = y;
        vY.push(dy);
    }
    P.y = vY;
    return P;
}
exports._plotVelocity = _plotVelocity;
function plotVelocity(Provinces, filter, name, plotType, getY = (p) => p.totale_casi) {
    const P = plot(Provinces, filter, name, plotType, getY);
    return _plotVelocity(P);
}
exports.plotVelocity = plotVelocity;
function plotGrothRate(Provinces, filter, name, plotType) {
    const PT = plot(Provinces, filter, name, plotType);
    const V = _plotVelocity(PT);
    const gY = [];
    for (let i = 0; i < V.x.length; i++) {
        const v0 = i > 0 ? V.y[i - 1] : 0;
        const v1 = V.y[i];
        gY.push(v1 / v0);
    }
    PT.y = gY;
    return PT;
}
const oneDayMs = moment.duration(1, 'days').asMilliseconds();
function plotProjection(columns, realPlots, growthRates, startDate, days) {
    realPlots = realPlots.slice(1).map(r => r.slice());
    if (!(columns > 1 && columns % 2 == 1))
        throw new Error("Invalid columns number. Columns should be: Date, Prov1, Vel1, Prov2, Vel2, ... So it should be > 0 and odd");
    let v = realPlots.findIndex(P => P[0].getTime() == startDate.getTime());
    let I0 = v < 0 ?
        _.range(0, columns).map((v, i) => i % 2 == 1 ? 0 : 1) :
        realPlots[v].slice();
    const nullRow = _.range(0, columns - 1).map(a => null);
    for (let d = 0; d < v; d++) {
        realPlots[d] = realPlots[d].concat(nullRow.slice());
    }
    realPlots[v] = realPlots[v].concat(realPlots[v].slice(1));
    const origRealPlot = realPlots.slice(v + 1).map(r => r.slice());
    const dEnd = Math.max(days, realPlots.length - v - 1);
    for (let d = 1; d < dEnd + 1; d++) {
        const i = v + d;
        realPlots[i] = realPlots[i] || [];
        realPlots[i][0] = new Date(startDate.getTime() + oneDayMs * d);
        for (let j = 1; j < columns; j += 2) {
            const gj = Math.floor(j / 2);
            realPlots[i][j + 1] =
                growthRates[gj] >= 1 ?
                    realPlots[i - 1][j] * (growthRates[gj] - 1) :
                    null;
            const prevI = i > 0 ? realPlots[i - 1][j] : I0[j];
            const vel = realPlots[i][j + 1];
            realPlots[i][j] = prevI + vel;
        }
    }
    for (let d = 1; d < dEnd + 1; d++) {
        const i = v + d;
        const oi = d - 1;
        realPlots[i] = [realPlots[i][0]]
            .concat(oi < origRealPlot.length ? origRealPlot[oi].slice(1) : nullRow.slice())
            .concat(realPlots[i].slice(1));
    }
    return realPlots;
}
function getProvinces() {
    return [...(new Set(exports.Provinces.map(p => p.denominazione_provincia)))];
}
exports.getProvinces = getProvinces;
function getRegions() {
    return [...(new Set(exports.Provinces.map(p => p.denominazione_regione)))];
}
exports.getRegions = getRegions;
//# sourceMappingURL=totaleCasi.js.map