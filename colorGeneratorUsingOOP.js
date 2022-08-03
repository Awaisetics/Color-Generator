class colorGenerator {
    constructor(red , green , blue){
        this.redRange = document.querySelector('#red');
        this.greenRange = document.querySelector('#green');
        this.blueRange = document.querySelector('#blue'); 

        this.valueOfRed = document.querySelector('#ValueOfRedColor');
        this.valueOfGreen = document.querySelector('#ValueOfGreenColor');
        this.valueOfBlue = document.querySelector('#ValueOfBlueColor');

        this.colorBox = document.querySelector('#colorBox');
        this.colorValue = colorBox.querySelector('#colorBox > span');

        this.red = red;
        this.green = green;
        this.blue = blue;

        this.ListenToEvents();
    }

    ListenToEvents() {
        this.redRange.oninput = (e) => {
            this.red =  e.target.value;
            this.renderHTML();
        }

        this.greenRange.oninput = (e) => {
            this.green =  e.target.value;
            this.renderHTML();
        }
        
        this.blueRange.oninput = (e) => {
            this.blue =  e.target.value;
            this.renderHTML();
        }
    }
    
    renderHTML(){
        this.colorBox.style.backgroundColor = `rgb(${this.red} , ${this.green} , ${this.blue})`;
        this.colorValue.textContent = `rgb ( ${this.red} , ${this.green} , ${this.blue} )`;
        this.valueOfRed.textContent = this.red;
        this.valueOfGreen.textContent = this.green;
        this.valueOfBlue.textContent = this.blue;
    }
}

let color = new colorGenerator(0 , 0, 0);
