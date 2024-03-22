//First create an input that stores in a variable for giving the option to decide grid size
let newGrids = [];
let gridSize = 4; //default size 4x4; 

const gridInput = document.querySelector('#gridsize');
const board = document.querySelector('#playground');

gridInput.addEventListener('click', () => {
    gridSize = prompt('What size grid would you like? Must be between 2 and 100', );
    if (gridSize === null) {
            return;
    }
    while (gridSize < 2 || gridSize > 100){
        gridSize = prompt('Invalid... must be between 2 and 100', );
        if (gridSize === null) {
            return;
        }
    } 
    gridSize = +gridSize;
    createGrid(gridSize);

});

function createGrid(gridSize) {
    board.innerHTML = '';
    newGrids = [];
    for (i = 0; i < gridSize*gridSize; i++) {        
        let gridItem = document.createElement("div");
        gridItem.style.height = `calc(100% / ${gridSize})`;
        gridItem.style.width = `calc(100% / ${gridSize})`;
        gridItem.classList.add('grids');
        gridItem.addEventListener('mouseover', () => {
            gridItem.style.backgroundColor = "black";
        });
        board.appendChild(gridItem);
        newGrids.push(gridItem);
    }
}

createGrid(gridSize);

