import { describe, it, expect } from "vitest";
import { JSDOM } from 'jsdom'
import { removeActiveClasses, getSelectorAll } from './activePanel'

const dom: JSDOM = (new JSDOM(`<!DOCTYPE html><body>
    <div class="container">
         <div class="container__panel container__panel__1 container__panel__active">
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
</body>`, { url: "http://localhost:5173/" }))

global.document = dom.window.document

describe(('activePanel test'), () => {
    it('Selectors are quered - getSelectorAll', () => {
        const result = getSelectorAll('.container__panel')

        expect(result.length).toBe(5)
    })

    it('CSS Class removed - removeActiveClasses', () => {
        const activeClass = getSelectorAll('.container__panel')
        removeActiveClasses(activeClass)
        const result = document.querySelectorAll('.container__panel__active')

        expect(result.length).toBe(0)
    })
})