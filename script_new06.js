'use strict'

let isNumber = function(testNumber) {
    return !isNaN( parseFloat(testNumber) ) && isFinite(testNumber);
};

let randomNumber = Math.floor(Math.random() * 100) + 1;

function start() {
    let x = prompt('Введите число от 1 до 100');

    if(x === null) {
        return;
    } else if(!isNumber(x)) {
        alert('Некорректный ввод! Введите число');
        console.log('Введено не число.');
        return start();
    } else {
        if(+x > randomNumber) {
            alert('Загаданное число меньше. Попробуйте еще раз.');
            return start();
        } else if(+x < randomNumber) {
            alert('Загаданное число больше. Попробуйте еще раз.');
            return start();
        } else {
            alert('Вы угадали!');
            return +x;
        }
    }};


console.log(start());
