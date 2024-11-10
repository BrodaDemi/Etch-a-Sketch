// Get DOM Elements
const container = document.getElementById('container');

// Creating the grid container div
const gridContainer = document.createElement('div');
gridContainer.classList.add('grid-container');

// Create 16x16 grid
for (let i = 0; i < 16 * 16; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');

    // Add grid item to container
    gridContainer.appendChild(gridItem);
}

// Add grid container to main container
container.appendChild(gridContainer);