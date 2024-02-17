const container = document.getElementById('container');

// Create initial grid
function createGrid() {
  const gridSize = document.getElementById('gridSize').value;
  container.innerHTML = '';
  container.style.setProperty('--grid-size', gridSize);

  for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    container.appendChild(cell);
  }
}

// Function to reset the grid
function resetGrid() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => cell.style.backgroundColor = 'white');
}

// Function to set hover color
function setHoverColor(color) {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.removeEventListener('mouseover', changeToBlack);
    cell.removeEventListener('mouseover', changeToRainbow);
    if (color === 'black') {
      cell.addEventListener('mouseover', changeToBlack);
    } else if (color === 'rainbow') {
      cell.addEventListener('mouseover', changeToRainbow);
    }
  });
}

// Function to change hover color to black
function changeToBlack(e) {
  e.target.style.backgroundColor = 'black';
}

// Function to change hover color to rainbow
function changeToRainbow(e) {
  const rainbowColors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
  const randomColor = rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
  e.target.style.backgroundColor = randomColor;
}

// Initialize grid
createGrid();

