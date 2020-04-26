
export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export function max2Any<T>(N: T[], getNumber: (T) => number) {

    let max = -Infinity
    let maxI = -1

    for (let i = 0; i < N.length; i++) {

        const n = getNumber(N[i])

        if (n > max) {
            max = n
            maxI = i
        }

    }

    return { max, i: maxI, element: N[maxI] }
}

