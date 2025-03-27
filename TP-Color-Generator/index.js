const body = document.body;
const span = document.querySelector('span');

// body.style.setProperty("--bg", rgbColor);

function getcolor () {
    setInterval(() => {
        let redColor = Math.floor(Math.random() * 255);
        let greenColor = Math.floor(Math.random() * 255);
        let blueColor = Math.floor(Math.random() * 255);
    
        let rgbColor = `rgb(${redColor}, ${greenColor}, ${blueColor})`;
    
        document.body.style.background = rgbColor;
        span.textContent = rgbColor;
    }, 2000);
}

getcolor();