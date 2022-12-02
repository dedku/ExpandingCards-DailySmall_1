export function removeActiveClasses(slelectorArray: NodeListOf<Element>) {
    slelectorArray.forEach(selector => {
        selector.classList.remove('container__panel__active')
    })
}

export function getSelectorAll(selector: string) {
    return document.querySelectorAll(selector)
}