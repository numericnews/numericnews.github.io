Object.defineProperty(exports, "__esModule", { value: true });
exports.delay = ms => new Promise(resolve => setTimeout(resolve, ms));
function max2Any(N, getNumber) {
    let max = -Infinity;
    let maxI = -1;
    for (let i = 0; i < N.length; i++) {
        const n = getNumber(N[i]);
        if (n > max) {
            max = n;
            maxI = i;
        }
    }
    return { max, i: maxI, element: N[maxI] };
}
exports.max2Any = max2Any;
//# sourceMappingURL=utils.js.map