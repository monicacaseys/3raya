let symbol = "$"; // símbolo que se dibujará al hacer clic

function highlightCell(cellId) {
  let cell = document.getElementById(cellId);
  cell.style.border = "2px solid blue";
}

function unhighlightCell(cellId) {
  let cell = document.getElementById(cellId);
  cell.style.border = "";
}

/* function drawSymbol(cellId) {
  let cell = document.getElementById(cellId);
  if (cell.innerHTML === "") {
    cell.innerHTML = symbol;
    checkWin();
  }
} */

const squares = document.querySelectorAll(".square");
let symbols = ["", "", "", "", "", "", "", "", ""];

squares.forEach(square => {
  square.addEventListener("click", () => {
    const index = square.id;
    if (symbols[index] === "") {
      square.textContent = "$";
      symbols[index] = "$";
      checkWin();
    }
  });
});

function checkWin() {
  const rows = [    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];
  const columns = [    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  const diagonals = [    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
 // Comprobar filas
 for (let i = 0; i < 9; i += 3) {
  if (symbols[i] !== '' && symbols[i] === symbols[i+1] && symbols[i] === symbols[i+2]) {
    alert('¡Has ganado!');
    return;
  }
}

// Comprobar columnas
for (let i = 0; i < 3; i++) {
  if (symbols[i] !== '' && symbols[i] === symbols[i+3] && symbols[i] === symbols[i+6]) {
    alert('¡Has ganado!');
    return;
  }
}

// Comprobar diagonal principal
if (symbols[0] !== '' && symbols[0] === symbols[4] && symbols[0] === symbols[8]) {
  alert('¡Has ganado!');
  return;
}

// Comprobar diagonal secundaria
if (symbols[2] !== '' && symbols[2] === symbols[4] && symbols[2] === symbols[6]) {
  alert('¡Has ganado!');
  return;
}
}
