function randomColor () {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}

const body = document.querySelector('body')
const letters = document.querySelectorAll('h1');
const intervalId = setInterval(function() {
    for (let letter of letters) {
        letter.style.color = randomColor();
    }
}, 1000);

const bgInterval = setInterval(function() {
    body.style.backgroundColor = randomColor();
}, 1000)