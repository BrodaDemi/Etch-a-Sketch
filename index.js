//Get Dom Elements
const grids = document.getElementById('container');

// creating the grids div
const newDiv = document.createElement('div');
gridContainer.classList.add('grid-container');

// create 16x16 grid
for (let i = 0; i < 16 * 16; i++) {
    const gridItem = document.createElement('div')
    gridItem.classList.add('grid-item');

    // Add grid to container
    gridContainer.appendChild(gridItem);
}

// Add grid container to main container
container.appendChild(gridContainer);