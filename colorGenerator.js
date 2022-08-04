const redSlider = document.querySelector('#red');
const greenSlider = document.querySelector('#green');
const blueSlider = document.querySelector('#blue'); 

const valueOfRed = document.querySelector('#ValueOfRedColor');
const valueOfGreen = document.querySelector('#ValueOfGreenColor');
const valueOfBlue = document.querySelector('#ValueOfBlueColor');

const colorBox = document.querySelector('#colorBox');
const colorValue = colorBox.querySelector('#colorBox > span');


const generateColor = () => {
    colorBox.style.backgroundColor = `rgb(${redSlider.value} , ${greenSlider.value} , ${blueSlider.value})`;
    colorValue.textContent = `rgb ( ${redSlider.value} , ${greenSlider.value} , ${blueSlider.value} )`;
    valueOfRed.textContent = redSlider.value;
    valueOfGreen.textContent = greenSlider.value;
    valueOfBlue.textContent = blueSlider.value;
}
