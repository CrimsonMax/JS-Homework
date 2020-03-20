/* Вывести уравнение прямой по координатам двух точек */

let x1 = 7;
let x2 = 9;
let y1 = 2;
let y2 = 5;
let a = (y1 - y2);
let b = (x2 - x1);
let c = (x1*y2 - x2*y1);
if (a == 0 && b == 0){
        console.log ("Error!");
} else {
        console.log (a, "x +", b, "y +", c, "= 0");
}