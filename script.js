//First create an input that stores in a variable for giving the option to decide grid size

const gridInput = document.querySelector('#gridsize');

gridInput.addEventListener('click', () => {
    gridSize = +prompt('What size grid would you like?', );
});

let gridSize = 6;
