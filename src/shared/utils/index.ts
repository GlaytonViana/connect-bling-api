export function convertToCentesimalInteger(value: string | null | undefined): number | null {
    if (typeof value === 'string') {
        const valueToInteger = Number(value)
        return Math.round(valueToInteger * 100)
    } else {
        return null
    }
}

export function getFileExtension(filename: string): string {
    return filename.slice(filename.lastIndexOf('.'))
}

export function removeDuplicatedElementByAttribute<T>(arr: Array<T>, property: string) {
    const result = arr.filter((v, i, a) => {
        let parsedItemV = JSON.parse(JSON.stringify(v))
        return (
            a.findIndex(t => {
                let parsedItemT = JSON.parse(JSON.stringify(t))
                parsedItemT[property] === parsedItemV[property]
            }) === i
        )
    })
    return result
}
