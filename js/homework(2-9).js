/* (1) Сделать реверс массива (массив в обратном направлении)
 (2) Поменять местами первую и вторую половину массива, 
например, для массива 1 2 3 4, результат 3 4 1 2. 
Если в массиве кол-во элементов нечётное (1 2 3 4 5),  
“средний” элемент оставить на своём месте: 4 5 3 1 2
 (3) Найти в массиве те элементы, значение которых меньше среднего арифметического, 
взятого от всех элементов массива.
 (4) В массиве найти сумму элементов, находящихся между минимальным и максимальным элементами. 
Сами минимальный и максимальный элементы в сумму не включать. */

let arr = []; 
arr.length = 5;

for (let ind = 0; ind < arr.length; ind++) {
    arr [ind] = (Math.floor (Math.random () * 11));
}

console.log ("Массив -", arr);

arr.reverse ();

console.log ("Обратный массив -", arr);

let tmp = Math.floor(arr.length / 2);

for (ind = 0; ind < tmp; ind++) {
    x = arr[ind];
    arr[ind] = arr[arr.length - tmp + ind];
    arr[arr.length - tmp + ind] = x;
}

console.log ("Перемешанный массив -", arr);

let sum = 0;
for (ind = 0; ind < arr.length; ind++) {
    sum = sum + arr[ind]
}

let ave = sum / arr.length;

console.log ("Числа меньше среднего в массиве:");

for (ind = 0; ind < arr.length; ind++) {
    if ( arr[ind] < ave) {
        x = arr[ind];
        console.log (x);
    }
}

let indMin = 0;
let indMax = 0;
let sum2 = 0;

for (ind = 0; ind < arr.length; ind++){
    if (arr[ind] < arr[indMin]) {
        indMin = ind;
    }
    if (arr[ind] > arr[indMax]) {
        indMax = ind;
    }
}

for (ind = 0; ind < arr.length; ind++) {
    if (arr[ind] > arr[indMin] && arr[ind] < arr[indMax]){
        sum2 = sum2 + arr[ind];
    }
}

console.log ("Сумма элементов между минимальным и максимальным числами массива -", sum2);