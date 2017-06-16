console.log('Tic Tac Toe');

var gameSquare = document.querySelector('.gameSquare');
var player1 = 'X'
var player2 = 'O'
var currentPlayer = player1;
var board = ' '.repeat(8).split(' ');
var restart = document.querySelector('button')
var squares = document.querySelectorAll('.s');
var numWinX = Number(document.getElementById('numWinX').textContent);
var numWinO = Number(document.getElementById('numWinO').textContent);

var changePlayer = function () {
   if (currentPlayer === 'X') {
  currentPlayer = player2;
} else {
  currentPlayer = player1;
}};

var winner = function () {
  if (board[0]+board[1]+board[2] === currentPlayer.repeat(3)) {
    document.querySelector('.winner').textContent = 'Player' + currentPlayer + ' is winner!'
  } else if (board[3]+board[4]+board[5] === currentPlayer.repeat(3)) {
    document.querySelector('.winner').textContent = 'Player' + currentPlayer + ' is winner!'
  } else if (board[6]+board[7]+board[8] === currentPlayer.repeat(3)) {
    document.querySelector('.winner').textContent = 'Player' + currentPlayer + ' is winner!'
  } else if (board[0]+board[3]+board[6] === currentPlayer.repeat(3)) {
    document.querySelector('.winner').textContent = 'Player' + currentPlayer + ' is winner!'
  } else if (board[1]+board[4]+board[7] === currentPlayer.repeat(3)) {
    document.querySelector('.winner').textContent = 'Player' + currentPlayer + ' is winner!'
  } else if (board[2]+board[5]+board[8] === currentPlayer.repeat(3)) {
    document.querySelector('.winner').textContent = 'Player' + currentPlayer + ' is winner!'
  } else if (board[0]+board[4]+board[8] === currentPlayer.repeat(3)) {
    document.querySelector('.winner').textContent = 'Player' + currentPlayer + ' is winner!'
  } else if (board[2]+board[4]+board[6] === currentPlayer.repeat(3)) {
    document.querySelector('.winner').textContent = 'Player' + currentPlayer + ' is winner!'
  }
  recordWin();
  // else {
  //   document.querySelector('.winner').textContent = 'Nobody wins!'
  // }
};

gameSquare.addEventListener('click', function (event) {
  if (event.target !== gameSquare) {
    if (event.target.textContent === "" || event.target.textContent === "1" || event.target.textContent === "2" || event.target.textContent === "3" || event.target.textContent === "4" || event.target.textContent === "5" || event.target.textContent === "6" || event.target.textContent === "7" || event.target.textContent === "8" || event.target.textContent === "9") {
      event.target.textContent = currentPlayer;
    } else {
      return;
    }
    var boardIndex = Number(event.target.getAttribute('data-index'))
    board[boardIndex] = currentPlayer;
  }
  winner();
  changePlayer();
});

var recordWin = function () {
  if (document.querySelector('.winner').textContent === 'PlayerX is winner!') {
    numWinX++;
    document.querySelector('#numWinX').textContent = numWinX
  } else if (document.querySelector('.winner').textContent === 'PlayerO is winner!') {
    numWinO++;
    document.querySelector('#numWinO').textContent = numWinO
  }
};

restart.addEventListener('click', function () {
  currentPlayer = player1;
  board = ' '.repeat(8).split(' ');
  squares[0].textContent= '1';
  squares[1].textContent= '2';
  squares[2].textContent= '3';
  squares[3].textContent= '4';
  squares[4].textContent= '5';
  squares[5].textContent= '6';
  squares[6].textContent= '7';
  squares[7].textContent= '8';
  squares[8].textContent= '9';
  document.querySelector('.winner').textContent === '';
});

// var winnerX = function () {
//   if (document.querySelector('.s0').textContent === 'X' && document.querySelector('.s1').textContent === 'X' && document.querySelector('.s2').textContent === 'X') {
//     console.log('Winner');
//   } else if (document.querySelector('.s3').textContent === 'X' && document.querySelector('.s4').textContent === 'X' && document.querySelector('.s5').textContent === 'X') {
//     console.log('Winner');
//   } else if (document.querySelector('.s6').textContent === 'X' && document.querySelector('.s7').textContent === 'X' && document.querySelector('.s8').textContent === 'X') {
//     console.log('Winner');
//   } else if (document.querySelector('.s0').textContent === 'X' && document.querySelector('.s3').textContent === 'X' && document.querySelector('.s6').textContent === 'X') {
//     console.log('Winner');
//   } else if (document.querySelector('.s1').textContent === 'X' && document.querySelector('.s4').textContent === 'X' && document.querySelector('.s7').textContent === 'X') {
//     console.log('Winner');
//   } else if (document.querySelector('.s2').textContent === 'X' && document.querySelector('.s5').textContent === 'X' && document.querySelector('.s8').textContent === 'X') {
//     console.log('Winner');
//   } else if (document.querySelector('.s0').textContent === 'X' && document.querySelector('.s4').textContent === 'X' && document.querySelector('.s8').textContent === 'X') {
//     console.log('Winner');
//   } else if (document.querySelector('.s2').textContent === 'X' && document.querySelector('.s4').textContent === 'X' && document.querySelector('.s6').textContent === 'X') {
//     console.log('Winner');
//   }
// };
//
// var winnerO = function () {
//   if (document.querySelector('.s0').textContent === 'O' && document.querySelector('.s1').textContent === 'O' && document.querySelector('.s2').textContent === 'O') {
//     console.log('Winner');
//   } else if (document.querySelector('.s3').textContent === 'O' && document.querySelector('.s4').textContent === 'O' && document.querySelector('.s5').textContent === 'O') {
//     console.log('Winner');
//   } else if (document.querySelector('.s6').textContent === 'O' && document.querySelector('.s7').textContent === 'O' && document.querySelector('.s8').textContent === 'O') {
//     console.log('Winner');
//   } else if (document.querySelector('.s0').textContent === 'O' && document.querySelector('.s3').textContent === 'O' && document.querySelector('.s6').textContent === 'O') {
//     console.log('Winner');
//   } else if (document.querySelector('.s1').textContent === 'O' && document.querySelector('.s4').textContent === 'O' && document.querySelector('.s7').textContent === 'O') {
//     console.log('Winner');
//   } else if (document.querySelector('.s2').textContent === 'O' && document.querySelector('.s5').textContent === 'O' && document.querySelector('.s8').textContent === 'O') {
//     console.log('Winner');
//   } else if (document.querySelector('.s0').textContent === 'O' && document.querySelector('.s4').textContent === 'O' && document.querySelector('.s8').textContent === 'O') {
//     console.log('Winner');
//   } else if (document.querySelector('.s2').textContent === 'O' && document.querySelector('.s4').textContent === 'O' && document.querySelector('.s6').textContent === 'O') {
//     console.log('Winner');
//   }
// };
