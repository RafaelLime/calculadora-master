let imc = 0;
let height = document.querySelector('#height').value;
let mass = document.querySelector('#mass').value;
let result = document.querySelector(".result")
function calculate(){
    imc = mass/height**2;
    result.innerHTML = `IMC: ${imc}`
}

function clear(){
    result.innerHTML = "";
    mass = 0;
    height = 0;
}