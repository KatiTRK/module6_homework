//Написать функцию, которая принимает число как аргумент и возвращает функцию,
//которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.


function fun1(x) {
    return function(y) {
        return x + y;
    };
}

let result = fun1(5)(17);
console.log(result)