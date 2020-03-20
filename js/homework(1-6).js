/* Определить, какой четверти принадлежит точка с координатами (x, y).
x и y - рандом от -10 до 10 */

let x = Math.floor (Math.random () * 11) - 10;
let y = Math.floor (Math.random () * 11) - 10;
console.log (x, y);

if (x > 0 && y > 0) {
        console.log ("First quarter");
} else {
        if (x < 0 && y > 0) {
                console.log ("Second quarter");   
        } else {
                if (x < 0 && y < 0) {
                        console.log ("Third quarter");
                } else {
                        if (x > 0 && y < 0) {
                                console.log ("Fourth quarter");
                        }
                }
        }
}

if (x == 0 || y == 0) {
        console.log ("No quarter")
}