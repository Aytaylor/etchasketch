const container = document.getElementById("container");
const buttonReset = document.getElementById("reset");


function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    
    document.querySelectorAll('.grid-item').forEach(item => item.remove());

    for (let c = 0; c < (rows * cols); c++) {
        const cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };

    const blocks = Array.from(document.querySelectorAll(".grid-item"));
    blocks.forEach(cell => cell.addEventListener("mouseenter", event => {
        fill(cell);
    }));
};

function resetPrompt() {
    let resetInput = parseInt(prompt("Enter how many rows to generate. (Between 1-100)"));
    return resetInput;
};

function reset() {    
    let newRows = resetPrompt();
    while (newRows < 1 || newRows > 100 || new) {
        newRows = resetPrompt();
    }
    console.log(newRows);
    makeRows(newRows, newRows);
}

function fill(cell) {
    cell.classList.add('filled');
}

buttonReset.addEventListener("click", event => {
    reset();
});

// build first grid
makeRows(100, 100);