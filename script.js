

function createGrid(size) {
    const container = document.querySelector('.grid-container');
    let squares = container.querySelectorAll('div');
    
    squares.forEach((div) => div.remove());

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size ** 2; i++) {
        const square = document.createElement('div');
        square.style.background = 'blue';
        container.insertAdjacentElement('beforeend', square);
    }
}

createGrid(16)

//size buttons
const btn8 = document.getElementById('8sq');
const btn12 = document.getElementById('12sq');
const btn16 = document.getElementById('16sq');
const btn24 = document.getElementById('24sq');
const btn36 = document.getElementById('36sq');
const btn48 = document.getElementById('48sq');
const btn60 = document.getElementById('60sq');
const btn72 = document.getElementById('72sq');
const btn84 = document.getElementById('84sq');
const btn96 = document.getElementById('96sq');
const btn100 = document.getElementById('100sq');

btn8.addEventListener('click', () => createGrid(8));
btn12.addEventListener('click', () => createGrid(12));
btn16.addEventListener('click', () => createGrid(16));
btn24.addEventListener('click', () => createGrid(24));
btn36.addEventListener('click', () => createGrid(36));
btn48.addEventListener('click', () => createGrid(48));
btn60.addEventListener('click', () => createGrid(60));
btn72.addEventListener('click', () => createGrid(72));
btn84.addEventListener('click', () => createGrid(84));
btn96.addEventListener('click', () => createGrid(96));
btn100.addEventListener('click', () => createGrid(100));
