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
    winnerX();
    winnerO();
    changePlayer();

  }
});

var winnerX = function () {
  if (document.querySelector('.s0').textContent === ' X ' && document.querySelector('.s1').textContent === ' X ' && document.querySelector('.s2').textContent === ' X ') {
    console.log('Winner');
  } else if (document.querySelector('.s3').textContent === ' X ' && document.querySelector('.s4').textContent === ' X ' && document.querySelector('.s5').textContent === ' X ') {
    console.log('Winner');
  } else if (document.querySelector('.s6').textContent === ' X ' && document.querySelector('.s7').textContent === ' X ' && document.querySelector('.s8').textContent === ' X ') {
    console.log('Winner');
  } else if (document.querySelector('.s0').textContent === ' X ' && document.querySelector('.s3').textContent === ' X ' && document.querySelector('.s6').textContent === ' X ') {
    console.log('Winner');
  } else if (document.querySelector('.s1').textContent === ' X ' && document.querySelector('.s4').textContent === ' X ' && document.querySelector('.s7').textContent === ' X ') {
    console.log('Winner');
  } else if (document.querySelector('.s2').textContent === ' X ' && document.querySelector('.s5').textContent === ' X ' && document.querySelector('.s8').textContent === ' X ') {
    console.log('Winner');
  } else if (document.querySelector('.s0').textContent === ' X ' && document.querySelector('.s4').textContent === ' X ' && document.querySelector('.s8').textContent === ' X ') {
    console.log('Winner');
  } else if (document.querySelector('.s2').textContent === ' X ' && document.querySelector('.s4').textContent === ' X ' && document.querySelector('.s6').textContent === ' X ') {
    console.log('Winner');
  }
};

var winnerO = function () {
  if (document.querySelector('.s0').textContent === ' O ' && document.querySelector('.s1').textContent === ' O ' && document.querySelector('.s2').textContent === ' O ') {
    console.log('Winner');
  } else if (document.querySelector('.s3').textContent === ' O ' && document.querySelector('.s4').textContent === ' O ' && document.querySelector('.s5').textContent === ' O ') {
    console.log('Winner');
  } else if (document.querySelector('.s6').textContent === ' O ' && document.querySelector('.s7').textContent === ' O ' && document.querySelector('.s8').textContent === ' O ') {
    console.log('Winner');
  } else if (document.querySelector('.s0').textContent === ' O ' && document.querySelector('.s3').textContent === ' O ' && document.querySelector('.s6').textContent === ' O ') {
    console.log('Winner');
  } else if (document.querySelector('.s1').textContent === ' O ' && document.querySelector('.s4').textContent === ' O ' && document.querySelector('.s7').textContent === ' O ') {
    console.log('Winner');
  } else if (document.querySelector('.s2').textContent === ' O ' && document.querySelector('.s5').textContent === ' O ' && document.querySelector('.s8').textContent === ' O ') {
    console.log('Winner');
  } else if (document.querySelector('.s0').textContent === ' O ' && document.querySelector('.s4').textContent === ' O ' && document.querySelector('.s8').textContent === ' O ') {
    console.log('Winner');
  } else if (document.querySelector('.s2').textContent === ' O ' && document.querySelector('.s4').textContent === ' O ' && document.querySelector('.s6').textContent === ' O ') {
    console.log('Winner');
  }
};
