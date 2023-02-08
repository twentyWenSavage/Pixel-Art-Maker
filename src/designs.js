// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    // Get the input values from the user
    const gridHeight = document.getElementById("inputHeight").value;
    const gridWidth = document.getElementById("inputWidth").value;
    //console.log(gridHeight); // Check if we got right input

    // Create the table - google table in html
    const table = document.getElementById("pixelCanvas");
    clearGrid(table);

    // Create a nested loop: 
    // Each row(tr) creates (# of height) cells(td)
    for (let width = 0; width < gridWidth; width++){
        const trElem = document.createElement("tr");
        table.appendChild(trElem);
        for (let height = 0; height < gridHeight; height++){
            const tdElem = document.createElement("td");
            // Fill color for one cell if clicked
            tdElem.addEventListener("click", (event) => {
                const color = document.getElementById("colorPicker").value;
                event.target.style.backgroundColor = color;
            });
            trElem.appendChild(tdElem);
        };
    };
}

function clearGrid(table) {
    let rowCells = table.firstElementChild;
    while (rowCells) {
        rowCells.remove();
        rowCells = table.firstElementChild;
    };
}

document.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent reloading/refreshing
    makeGrid();
});
