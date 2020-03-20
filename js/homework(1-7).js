/* Определение принадлежности точки кругу с центром в начале координат: 
вводятся координаты (x;y) точки и радиус круга (r), 
определить, принадлежит ли данная точка кругу, если его центр находится в начале координат. 
x и y - рандом от -15 до 15, r - рандом от -10 до 10 */

let a = Math.floor (Math.random () * 16) - 15;
let b = Math.floor (Math.random () * 16) - 15;
let r = Math.floor (Math.random () * 11) - 10;

console.log ("x=", a, "y=", b, "R=", r);

let p = Math.sqrt (a*a + b*b);

if (p > r) {
        console.log ("Nope!");
} else {
        console.log ("Yep!");
}