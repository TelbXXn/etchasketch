//First create an input that stores in a variable for giving the option to decide grid size
let newGrids = [];
let gridSize = 4; //default size 4x4; 

const gridInput = document.querySelector('#gridsize');
const board = document.querySelector('#playground');

gridInput.addEventListener('click', () => {
    gridSize = +prompt('What size grid would you like?', );
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

