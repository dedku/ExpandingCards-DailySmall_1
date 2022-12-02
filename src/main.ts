import './scss/style.scss'
import { getSelectorAll, removeActiveClasses } from './ts/activePanel'


document.body.innerHTML = `
  <div class="container">
    <div class="container__panel container__panel__1">
      <h3>Explore The World</h3>
    </div>
    <div class="container__panel container__panel__2">
      <h3>Wild Forest</h3>
    </div>
    <div class="container__panel container__panel__3">
      <h3>Sunny Beach</h3>
    </div>
    <div class="container__panel container__panel__4">
      <h3>City on Winter</h3>
    </div>
    <div class="container__panel container__panel__5">
      <h3>Mountains - Clouds</h3>
    </div>
  </div>
`

const panels: NodeListOf<Element> = getSelectorAll('.container__panel')

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActiveClasses(panels)
    panel.classList.add('container__panel__active')
  })
})
