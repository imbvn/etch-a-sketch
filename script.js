let color = 'black';

function createGrid(size) {
    const container = document.querySelector('.grid-container');
    let squares = container.querySelectorAll('div');
    
    squares.forEach((div) => div.remove());

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size ** 2; i++) {
        const square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare);
        square.style.background = 'white';
        container.insertAdjacentElement('beforeend', square);
    }
}

function colorSquare() {
    if (color === 'rainbow') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    else {
        this.style.backgroundColor = color;
    }
}

function changeColor(choice) {
    color = choice;
}

function resetBoard() {
    const container = document.querySelector('.grid-container');
    let squares = container.querySelectorAll('div');
    
    squares.forEach((div) => div.style.backgroundColor = 'white');
}

createGrid(16)
