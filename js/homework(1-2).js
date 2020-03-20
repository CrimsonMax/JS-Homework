/* Найти корни квадратного уравнения. (ax2 + bx + c) */

let a = 1;
let b = -4;
let c = 3;
let d = Math.pow (b, 2) - 4 * a * c;
let x1 = (-b + Math.sqrt (d)) / (2 * a);
let x2 = (-b - Math.sqrt (d)) / (2 * a);

if (d >= 0) {
        if (d > 0) {
                console.log ("x1 = ", x1);
                console.log ("x2 = ", x2);
            } else {
                console.log ("x1, x2 = ", x1);
            }
} else {
        console.log ("нет корней");
}