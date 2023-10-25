/* Query Selectors */
const container = document.querySelector('.gridContainer');
const gridBtn = document.querySelector('#gridBtn');
const eraserBtn = document.querySelector('#eraser');

// Initialize Eraser Function
let eraser = false;

/* Event Listeners */

gridBtn.addEventListener('click', () => {
    reset();
    createGrid();
});

document.querySelector('#reset').addEventListener ('click', () => {
    reset();
});

eraserBtn.addEventListener('click', () => {
    if (!eraser) {
        eraserBtn.querySelector("p") .textContent= 'Eraser: ON';
        eraser = true;
    }
    else {
        eraserBtn.querySelector("p") .textContent= 'Eraser: OFF';
        eraser = false;
    }
})

// Handles Opacity + color change of cells upon mouse click and mouse hover
// When combined, they create the drawing effect
const colorHandler2 = (e) => {
    if (e.buttons > 0) {
        const currentOpacity = parseFloat(e.target.style.opacity) || 0;
        const newOpacity = eraser ? 0 : Math.min(1, currentOpacity + 0.1);
        e.target.style.opacity = newOpacity;
        e.target.style.backgroundColor = 'rgb('+ (Math.random() * 256) + ',' + (Math.random() * 256) + ',' + (Math.random() * 256) +')';
    }
}
const colorHandler1 = (e) => {
    const currentOpacity = parseFloat(e.target.style.opacity) || 0;
        const newOpacity = eraser ? 0 : Math.min(1, currentOpacity + 0.1);
        e.target.style.opacity = newOpacity;
        e.target.style.backgroundColor = 'rgb('+ (Math.random() * 256) + ',' + (Math.random() * 256) + ',' + (Math.random() * 256) +')';

}

/* Grid Operations */
function createGrid () {
    container.innerHTML = '';
    let size = document.querySelector('#size').value;
    for (var i = 0; i < size; i++) {
        var row = document.createElement('div');
        row.className = 'row';
        for (var j = 0; j < size; j++) {
            var cell = document.createElement('div');
            cell.className = 'cell';
            cell.style.width = Math.floor(100 / size) + '%';
            cell.style.backgroundColor = 'black';
            cell.style.opacity = 0;
            row.appendChild(cell);
            
        }
        container.appendChild(row);
    }
    let cells = document.querySelectorAll('.cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('mousedown', colorHandler1);
        cells[i].addEventListener('mouseenter', colorHandler2);
    }
}

function reset() {
    createGrid();
}

