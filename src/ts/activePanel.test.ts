import { describe, it, expect, beforeEach } from "vitest";
import { JSDOM } from 'jsdom'
import { removeActiveClasses } from './activePanel'

let dom: JSDOM
let body: any

describe(('activePanel test'), () => {
    beforeEach(async () => {
        dom = new JSDOM(`<!DOCTYPE html><body>
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
        </body>`, { url: "http://localhost:5173/" });

        body = dom.window.document
    })

    it('CSS Class removed', () => {
        const activeClass = body.querySelector('.container__panel__active')
        console.log(activeClass)
        removeActiveClasses()
        console.log(activeClass)
    })
})