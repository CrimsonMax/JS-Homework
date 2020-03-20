/* Найти сумму и произведение цифр введенного натурального числа. 
число - рандом от 100000 до 1000000 */

let yMin = 100000;
let yMax = 1000000;
let x = Math.floor (Math.random () * (yMax - yMin + 1) ) + yMin;

console.log ("Число", x);

let sum = 0;
let mul = 1;

do {
    mul = mul * (x % 10);
    sum = sum + x % 10;
} while (x = Math.floor(x / 10));

console.log ("Сумма", sum);
console.log ("Произведение", mul);