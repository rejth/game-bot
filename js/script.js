'use strict';

const isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const start = (function numberGuesser() {
  let attempts = 10;
  let randomNum = parseInt(Math.random() * 100);

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
    attempts--;

    if (attempts > 0) {
      if (userNum > randomNum) {
        alert('Загаданное число меньше, осталось попыток: ' + attempts);
        guessNumber();
      } else if (userNum < randomNum) {
        alert('Загаданное число больше, осталось попыток: ' + attempts);
        guessNumber();
      } else {
        let answer = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
        if (answer === true) {
          attempts = 10;
          randomNum = parseInt(Math.random() * 100);
          guessNumber();
        } else {return;}
      }
    } else {
      let answer = confirm('Попытки закончились, хотите сыграть еще?');
      if (answer === true) {
        attempts = 10;
        randomNum = parseInt(Math.random() * 100);
        guessNumber();
      } else {return;}
    }
  };
})();

start();
