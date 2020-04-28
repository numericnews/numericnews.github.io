import * as _ from 'lodash'
import percentile = require("percentile")


export function stdDev(N: number[], avg = null) {

    avg = _.isNumber(avg) ? avg : average(N)

    let variance = 0

    for (const n of N) {
        variance += (n - avg)**2
    }

    return Math.sqrt(variance)

}

export function average(N: number[]) {
    let sum = 0
    for (const n of N) {
        sum += n
    }
    return sum / N.length
}

export function max2(N: number[]) {

    let max = -Infinity
    let maxI = -1

    for (let i = 0; i < N.length; i++) {

        if (N[i] > max) {
            max = N[i]
            maxI = i
        }

    }

    return { max, i: maxI }
}


function min2(N: number[]) {

    let min = +Infinity
    let minI = -1

    for (let i = 0; i < N.length; i++) {

        if (N[i] < min) {
            min = N[i]
            minI = i
        }

    }

    return { min, i: minI }
}


/*
    Say we have:

        y: 0 3 2 4 1 6 2
               ^  
    With startIndex = 2, y[2] == 2 this function returns the average of 4-3 and 6-3.
    This function returns the average of all the positive differences with the max of y.slice(0, startIndex).
    In this example, the max is 3 and is in y[i].
*/
function averageOfAbovePreviousMax(startIndex: number, y: number[]) {
    const max = Math.max(...y.slice(0, startIndex))

    const deltas =
        y.slice(startIndex)
            .map(yi => {
                const d = yi - max
                return d > 0 ? d : 0
            })
            .filter(yi => yi) // remove zero values

    return average(deltas)
}

    /*
// plot: number[][] in Gviz format
// based on https://en.wikipedia.org/wiki/68%E2%80%9395%E2%80%9399.7_rule
// or if distribution is not normal, on https://en.wikipedia.org/wiki/Chebyshev%27s_inequality
export function smallYBounds(plot) {

  const min = []
  const max = []
  for (let j = 1; j < plot[0].length; j++) {
    const image = plot.map(p => p[j]).filter(y => _.isFinite(y));
    // truemin, truemax are useful for ignoring bad data
    const truemin = min2(image).min;
    const truemax = max2(image).max;
    const avg = average(image)
    if (!_.isFinite(avg))
          continue
    const sd = stdDev(image, avg)
    min.push(Math.max(truemin, avg - 2 * sd))
    max.push(Math.min(truemax, avg + 2 * sd))
  }

  return [Math.min(...min), Math.max(...max)]

}
     */

// plot: number[][] in Gviz format
// y bounds without outliers
export function smallYBounds(plot, p = 1) {

  const min = []
  const max = []

  for (let j = 1; j < plot[0].length; j++) {
    const image = plot.map(p => p[j]).filter(_.isFinite)
    min.push(percentile(p, image))
    max.push(percentile(100-p, image))
  }

  return [Math.min(...min.filter(_.isFinite)), Math.max(...max.filter(_.isFinite))]

}

