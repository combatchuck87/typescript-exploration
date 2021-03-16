/*
 Examples of loops in typescript for future reference.
 */

// for loops
// for (initial_count_value; termination_condition; step) { statements... }
let forNum:number = 5;
let i:number;
let factorial:number = 1;

for (i = forNum; i >= 1; i--) {
    factorial *= i;
}
console.log("Factorial = " + factorial);

// while loops
// while (condition) { statements... }
let whileNum:number = 6;
let whileFactorial = 1;

while(whileNum >= 1) {
    whileFactorial *= whileNum;
    whileNum--;
}
console.log("While Factorial = " + whileFactorial);

// do..while loops
// do { statements... } while (condition)
let doWhileNum:number = 7;

do {
    console.log(doWhileNum);
    doWhileNum--;
} while (doWhileNum >= 0);
