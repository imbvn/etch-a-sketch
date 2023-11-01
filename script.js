

function createGrid(size) {
    const container = document.querySelector('.grid-container');
    let squares = container.querySelectorAll('div');
    
    squares.forEach((div) => div.remove());

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size ** 2; i++) {
        const square = document.createElement('div');
        square.addEventListener('mouseover', () => square.style.backgroundColor = 'black');
        square.style.background = 'white';
        container.insertAdjacentElement('beforeend', square);
    }
}

createGrid(16)
