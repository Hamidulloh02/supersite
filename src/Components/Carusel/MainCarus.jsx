import React from 'react'
import "./carusel.css"
function MainCarus() {
    return (
        <div className=''>
            <div class="swiffy-slider  slider-nav-round slider-item-ratio slider-item-ratio-21x9" id="slider1">
    <ul class="slider-container">
        <li><img src="./images/solermain.png" loading="lazy" alt="..."/></li>
        <li><img src="./images/solermain.png" loading="lazy" alt="..."/></li>
        <li><img src="./images/solermain.png" loading="lazy" alt="..."/></li>
        <li><img src="./images/solermain.png" loading="lazy" alt="..."/></li>
    </ul>

    <button type="button" class="slider-nav" aria-label="Go left"></button>
    <button type="button" class="slider-nav slider-nav-next" aria-label="Go left"></button>

    <div class="slider-indicators slider-indicators-square d-none d-md-flex">
        <button class="" aria-label="Go to slide" fdprocessedid="bgjn"></button>
        <button aria-label="Go to slide" fdprocessedid="17yjyg" class=""></button>
        <button aria-label="Go to slide" fdprocessedid="xsx34y" class="active"></button>
        <button aria-label="Go to slide" fdprocessedid="82qu" class=""></button>
    </div>

    <div class="slider-indicators slider-indicators-sm slider-indicators-dark slider-indicators-round d-md-none slider-indicators-highlight">
        <button class="" aria-label="Go to slide"></button>
        <button aria-label="Go to slide" class=""></button>
        <button aria-label="Go to slide" class="active"></button>
        <button aria-label="Go to slide" class=""></button>
    </div>
</div>
        </div>
    )
}

export default MainCarus
