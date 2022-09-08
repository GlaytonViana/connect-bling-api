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

export function getPeriod(dateParam?: Date) {
    const date = dateParam || new Date()

    const year = String(date.getFullYear())
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const today = String(date.getDate()).padStart(2, '0')
    const yesterday = date.getDate() - 1 > 0 ? String(date.getDate() - 1).padStart(2, '0') : '30'

    let lastMonth = month
    if (date.getDate() - 1 == 0) {
        lastMonth = String(date.getMonth()).padStart(2, '0')
    }

    if (date.getDate() - 1 == 0 && date.getMonth() == 0) {
        lastMonth = '12'
    }

    return `${yesterday}/${lastMonth}/${year} TO ${today}/${month}/${year}`
}
