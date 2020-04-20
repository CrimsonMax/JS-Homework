/* Вывести таблицу значений функции y = -0.23x2 + x. 
Значения аргумента (x) задаются минимумом, максимумом и шагом.*/

let xMin = 5;
let xMax = 10;
let step = 0.5;

while (xMin <= xMax) {
    let y = -0.23 * Math.pow (xMin, 2) + xMin;
    console.log (xMin, "->", y);
    xMin += step;
}