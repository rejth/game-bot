'use strict';

const isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

function numberGuesser() {
  let randomNum = parseInt(Math.random() * 100);
  console.log(randomNum);

  return function guessNumber() {
    let userNum = prompt('Угадай число от 1 до 100');

    if (userNum === null) {
      alert('Игра окончена');
      return;
    }

    if (!isNumber(userNum)) {
      userNum = alert('Введи число!');
      guessNumber();
    }

    if (userNum > randomNum) {
      alert('Загаданное число меньше');
      guessNumber();
    } else if (userNum < randomNum) {
      alert('Загаданное число больше');
      guessNumber();
    } else {
      alert('Поздравляю, Вы угадали!!!');
      return;
    }
  };
}

const startGame = numberGuesser();
startGame();
