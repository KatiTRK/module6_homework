//Написать функцию, которая принимает на входе любое число (но не больше 1 000), 
//определяет, является ли оно простым, 
//и выводит простое число или нет.
//Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.

function randomNumber(num){
    if ((num < 2) || (num > 1000)) {
        return "Данные неверны!";
    } else {
        for (let i = 2; i < num; i++){
            if (num % i === 0) {
                return "Составное число";
            }
        }
        return "Простое число";
    }
}

let randNum = Math.floor(Math.random() * 2000);
let b = randomNumber(randNum);
console.log("Число " + randNum + ' простое = ' + b);
