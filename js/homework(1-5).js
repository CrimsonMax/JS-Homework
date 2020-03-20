/* Вводятся два целых числа. Проверить, делится ли первое на второе. 
Вывести на экран сообщение об этом, а также остаток (если он есть) и частное (в любом случае). 
(рандом от -100 до 100) */

let a1 = Math.floor (Math.random () * 201) - 100;
let a2 = Math.floor (Math.random () * 201) - 100;
console.log (a1, ":", a2);

if (a1 % a2 == 0) {
        console.log ("Valid!", (a1 / a2));
} else {
        console.log ("Not valid.", "remainder- ", (a1 % a2));
}