const redRange = document.querySelector('#red');
const greenRange = document.querySelector('#green');
const blueRange = document.querySelector('#blue'); 

const valueOfRed = document.querySelector('#ValueOfRedColor');
const valueOfGreen = document.querySelector('#ValueOfGreenColor');
const valueOfBlue = document.querySelector('#ValueOfBlueColor');

const colorBox = document.querySelector('#colorBox');
const colorValue = colorBox.querySelector('#colorBox > span');

let red = 0;
let green = 0;
let blue = 0;

redRange.addEventListener('input' , e => {
    console.log();
    red = e.target.value;
    renderHTML();
});

greenRange.addEventListener('input' , e => {
    green = e.target.value;
    renderHTML();
});

blueRange.addEventListener('input' , e => {
    blue = e.target.value;
    renderHTML();
});

const renderHTML = () => {
    colorBox.style.backgroundColor = `rgb(${red} , ${green} , ${blue})`;
    colorValue.textContent = `rgb ( ${red} , ${green} , ${blue} )`;
    valueOfRed.textContent = red;
    valueOfGreen.textContent = green;
    valueOfBlue.textContent = blue;
}
