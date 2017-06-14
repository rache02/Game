console.log('Tic Tac Toe');

var gameSquare = document.querySelector('.gameSquare');

gameSquare.addEventListener('click', function () {
  event.target.textContent = 'X';
});
