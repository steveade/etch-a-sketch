let body = document.querySelector("body");
let gridContainer = document.createElement("div");
gridContainer.classList.add("grid");

for (let i = 0; i <= 15; i++) {

    let row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j <= 15; j++) {

        let cell = document.createElement("div");
        cell.classList.add("cell");
        row.appendChild(cell);

    }

    gridContainer.appendChild(row);
}

body.appendChild(gridContainer);
let cells = document.querySelectorAll(".cell");

cells.forEach(cell => {
    cell.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "#7ffd7f";
    });
});