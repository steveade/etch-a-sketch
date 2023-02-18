let gridContainer = document.querySelector(".grid-container");
let button = document.querySelector("#grid-size-select");
let grid = document.createElement("div");
let color = 255;
let gridSize = 16;
grid.classList.add("grid");

for (let i = 0; i <= 15; i++) {

    let row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j <= 15; j++) {

        let cell = document.createElement("div");
        cell.classList.add("cell");
        row.appendChild(cell);
    }

    grid.appendChild(row);
}
gridContainer.appendChild(grid);

let cells = document.querySelectorAll(".cell");
cells.forEach(cell => {
    cell.addEventListener("mouseover", event => {
        color = color - (0.1*color);
        event.target.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
    });
});

function createNewGrid(size) {
    let newGrid = document.createElement("div");
    newGrid.classList.add("new-grid");

    for (let i = 0; i <= size-1; i++) {

        let row = document.createElement("div");
        row.classList.add("new-row");

        for (let j = 0; j <= size-1; j++) {

            let cell = document.createElement("div");
            cell.classList.add("new-cell");
            cell.style.height = `${800/size}px`;
            cell.style.width = `${832/size}px`;
            row.appendChild(cell);
        }

        newGrid.appendChild(row);
    }

    gridContainer.appendChild(newGrid);
    grid = newGrid;

    let newCells = document.querySelectorAll(".new-cell");
    newCells.forEach(cell => {
        cell.addEventListener("mouseover", event => {
            color = color - (0.1*color);
            event.target.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
        });
    });
}

button.addEventListener("click", () => {
    color = 255;
    let prevSize = gridSize;
    gridSize = Number(prompt("Enter a size from 1-100: "));
    if (gridSize === 0) {
        gridSize = prevSize;
    } else {
        while (!(gridSize >= 1 && gridSize <= 100)) {
            gridSize = Number(prompt("You entered an invalid number. Please enter a number from 1-100: "));
        }
    }
    gridContainer.removeChild(grid);
    createNewGrid(gridSize);
    console.log(grid);
});