let num:number = 2;
let result = num > 0 ? "positive" : "negative";

console.log("The result is " + result);

// if example
let num1:number = 5;
if (num1 > 0) {
    console.log("The number is positive.");
}

// if..else example
let num2:number = 12;
if (num2 % 2 == 0) {
    console.log("The number is even.");
}
else {
    console.log("The number is odd.");
}

// else..if example
let num3:number = 3;
if (num3 > 0) {
    console.log(num + " is positive");
}
else if (num3 < 0) {
    console.log(num + " is negative");
}
else {
    console.log(num + " is neither positive nor negative");
}

// switch example
let owl_grade:string = "A";
switch (owl_grade) {
    case "O": {
        console.log("Outstanding");
        break;
    }
    case "E": {
        console.log("Exceeds Expectations");
        break;
    }
    case "A": {
        console.log("Acceptable");
        break;
    }
    case "P": {
        console.log("Poor")
        break;
    }
    case "D": {
        console.log("Dreadful")
        break;
    }
    case "T": {
        console.log("Troll")
        break;
    }
}

