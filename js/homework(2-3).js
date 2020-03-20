/* Докажите, что для множества натуральных чисел верно 1+2+...+n = n(n+1)/2 */

let n = 5;
let sum = 0;
for (let ind = 1; ind <= n; ind++) {
    sum = sum + ind;
}
let sec = n * (n + 1) / 2;

console.log ("n=", n);
console.log ("1+2+...+n=", sum);
console.log ("n(n+1)/2=", sec);