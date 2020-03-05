'use strict';
const input = document.querySelector('#font-size-control');
const textForChangeWithInput =document.querySelector('#text')
input.addEventListener('input',changeRange)


function changeRange(event){
const inptRange=event.currentTarget.value;
textForChangeWithInput.style.fontSize=inptRange+'px';
}