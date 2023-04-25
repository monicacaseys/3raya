let symbol = "$"; // símbolo que se dibujará al hacer clic

function highlightCell(cellId) {
  let cell = document.getElementById(cellId);
  cell.style.border = "2px solid blue";
}

function unhighlightCell(cellId) {
  let cell = document.getElementById(cellId);
  cell.style.border = "";
}

function drawSymbol(cellId) {
  let cell = document.getElementById(cellId);
  if (cell.innerHTML === "") {
    cell.innerHTML = symbol;
    checkWin();
  }
}

function checkWin() {
  let cells = document.querySelectorAll("[id^='cell']");

  // Revisar si hay 3 celdas consecutivas con el mismo símbolo
  for (let i = 0; i < cells.length; i++) {
    let currentSymbol = cells[i].innerHTML;
    if (currentSymbol !== "") {
      let row = Math.floor(i / 3);
      let col = i % 3;

      // Revisar fila
      if (cells[row * 3].innerHTML === currentSymbol &&
          cells[row * 3 + 1].innerHTML === currentSymbol &&
          cells[row * 3 + 2].innerHTML === currentSymbol) {
        alert("¡Has ganado!");
        resetGame();
        return;
      }

      // Revisar columna
      if (cells[col].innerHTML === currentSymbol &&
          cells[col + 3].innerHTML === currentSymbol &&
          cells[col + 6].innerHTML === currentSymbol) {
        alert("¡Has ganado!");
        resetGame();
        return;
      }

      // Revisar diagonal principal
      if (row === col &&
          cells[0].innerHTML === currentSymbol &&
          cells[4].innerHTML === currentSymbol &&
          cells[8].innerHTML === currentSymbol) {
        alert("¡Has ganado!");
        resetGame();
        return;
      }

      // Revisar diagonal secundaria
      if (row + col === 2 &&
          cells[2].innerHTML === currentSymbol &&
          cells[4].innerHTML === currentSymbol &&
          cells[6].innerHTML === currentSymbol) {
        alert("¡Has ganado!");
        resetGame();
        return;
      }
    }
  }



function resetGame() {
  let cells = document.querySelectorAll("[id^='cell']");
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
    cells[i].style.border = "";
  }
}
