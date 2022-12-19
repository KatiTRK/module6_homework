let arr = [0, 1, 2, 3, 4, 5, 6, 7, 22, "Morning", null, "5"];
let evenNumbers = 0;
let oddNumbers = 0;
let otherNumbers = 0;

function countEvenOdd(arr){
for (let i = 0; i < arr.length; i++) {

    if (arr[i] === 0 || (typeof (arr[i]) !== 'number')){
        otherNumbers++;
    } else {
        if (arr[i] % 2 === 0) {
            evenNumbers++;
    } else {
        oddNumbers++;
    }
}
}

    return [evenNumbers, oddNumbers, otherNumbers];
}

let result= countEvenOdd(arr);

console.log('Количество четных чисел ' + evenNumbers)
console.log('Количество нечетных чисел ' + oddNumbers)
console.log('Другие элементы ' + otherNumbers)