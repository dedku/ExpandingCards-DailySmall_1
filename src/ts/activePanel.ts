export const panels: NodeListOf<Element> = document.querySelectorAll('.container__panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('container__panel__active')
    })
})

export function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('container__panel__active')
    })
}