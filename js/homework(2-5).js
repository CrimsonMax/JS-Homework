/*Написать программу, которая будет складывать, вычитать, умножать или делить два числа. 
Числа и знак операции вводятся пользователем. 
После выполнения вычисления программа не должна завершаться, 
а должна запрашивать новые данные для вычислений. 
Завершение программы должно выполняться при вводе символа '0' в качестве знака операции. 
Если пользователь вводит неверный знак (не '0', '+', '-', '*', '/'), 
то программа должна сообщать ему об ошибке и снова запрашивать знак операции. 
Также сообщать пользователю о невозможности деления на ноль, 
если он ввел 0 в качестве делителя.*/

let num1;
let num2;
let oper;

do {
    num1 = prompt("Input first number", 0);
    oper = prompt("Input operation", '"+, -, *, /" or 0 for Exit');
    num2 = prompt("Input second number", 0);

    if (oper === "+") {
        alert(num1 + oper + num2 + "=" + (+num1 + +num2));
    } else if (oper === "-") {
        alert(num1 + oper + num2 + "=" + (+num1 - +num2));
    } else if (oper === "*") {
        alert(num1 + oper + num2 + "=" + (+num1 * +num2));
    } else if (oper === "/" && num2 > 0) {
        alert(num1 + oper + num2 + "=" + (+num1 / +num2));
    } else if (oper === "/" && +num2 === 0) {
        alert("No division by 0!");
    } else if (oper === "0") {
        alert("End application");
    } else {
        alert("Error");
    }
} while (oper != "0");