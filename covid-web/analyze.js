Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const percentile = require("percentile");
function stdDev(N, avg = null) {
    avg = _.isNumber(avg) ? avg : average(N);
    let variance = 0;
    for (const n of N) {
        variance += (n - avg) ** 2;
    }
    return Math.sqrt(variance);
}
exports.stdDev = stdDev;
function average(N) {
    let sum = 0;
    for (const n of N) {
        sum += n;
    }
    return sum / N.length;
}
exports.average = average;
function max2(N) {
    let max = -Infinity;
    let maxI = -1;
    for (let i = 0; i < N.length; i++) {
        if (N[i] > max) {
            max = N[i];
            maxI = i;
        }
    }
    return { max, i: maxI };
}
exports.max2 = max2;
function min2(N) {
    let min = +Infinity;
    let minI = -1;
    for (let i = 0; i < N.length; i++) {
        if (N[i] < min) {
            min = N[i];
            minI = i;
        }
    }
    return { min, i: minI };
}
function averageOfAbovePreviousMax(startIndex, y) {
    const max = Math.max(...y.slice(0, startIndex));
    const deltas = y.slice(startIndex)
        .map(yi => {
        const d = yi - max;
        return d > 0 ? d : 0;
    })
        .filter(yi => yi);
    return average(deltas);
}
function smallYBounds(plot, p = 1) {
    const min = [];
    const max = [];
    for (let j = 1; j < plot[0].length; j++) {
        const image = plot.map(p => p[j]).filter(_.isFinite);
        min.push(percentile(p, image));
        max.push(percentile(100 - p, image));
    }
    return [Math.min(...min.filter(_.isFinite)), Math.max(...max.filter(_.isFinite))];
}
exports.smallYBounds = smallYBounds;
//# sourceMappingURL=analyze.js.map