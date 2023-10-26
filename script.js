

function createGrid(size) {
    const container = document.querySelector('.grid-container');

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size ** 2; i++) {
        const gridElement = document.createElement('div');
    }
}
