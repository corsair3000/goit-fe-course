"use strict";


const input = document.querySelector('input[type="number"]');
const btnRender = document.querySelector('button[data-action="render"]');
const btnDestroy = document.querySelector('button[data-action="destroy"]');
const container = document.querySelector('#boxes');
console.dir(container)
let widthAndHeightBoxes=30;


btnRender.addEventListener('click',crateBoxes);
btnDestroy.addEventListener('click',destroyBoxes);

let amount=0;
function crateBoxes(){
    if (input.value!==container.childElementCount){
    amount=input.value-container.childElementCount;
    }

    if (input.value<container.childElementCount){
        amount=input.value;
        widthAndHeightBoxes=30;
        container.innerHTML='';

    }

    for (let i=0; i<amount;i++){
    let crateHexCode = Math.random();
    let backGroundColor = `background-color:#${String(crateHexCode).slice(2,5)}`;
    let sizeBox=`width:${widthAndHeightBoxes+=10}px;height:${widthAndHeightBoxes}px`;
    const crateOneBox = `<div class="div1" style="${backGroundColor};${sizeBox}"></div>`;
    container.insertAdjacentHTML("beforeend",crateOneBox);
}
}


function destroyBoxes(){
container.innerHTML='';
input.value=0;
widthAndHeightBoxes=30;

}