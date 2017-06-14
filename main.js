console.log('Tic Tac Toe');

var gameSquare = document.querySelector('.gameSquare');
var player1 = ' X '
var player2 = ' O '
var currentPlayer = player1;
var changePlayer = function () {
   if (currentPlayer === ' X ') {
  currentPlayer = player2;
} else {
  currentPlayer = player1;
}};

gameSquare.addEventListener('click', function () {
  if (event.target !== gameSquare) {
    event.target.textContent = currentPlayer;
    changePlayer();
  }
});
