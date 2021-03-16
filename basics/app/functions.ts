// Function examples
/*
 Syntax
 function function_name() {
   function body
 }
 */
// Simple function no parameters
function simple(){
    console.log("Simple Function");
}

// Simple Function will parameters
function hello(name:string) {
    console.log("Hello, ", name);
}

// Optional Parameters
function optionalParams(id:number, name:string, mail_id?:string) {
    console.log("ID: ", id);
    console.log("Name: ", name);

    if(mail_id != undefined) {
        console.log("Email Id", mail_id);
    }
}

// Rest Parameters
function restParams(...nums:number[]) {
    let i;
    let sum:number = 0;

    for(i = 0; i < nums.length; i++) {
        sum = sum + nums[i]
    }
    console.log("Sum of the numbers: ", sum);
}

// Default Parameters
function defaultParams(price:number, rate:number = 0.50) {
    let discount = price * rate;
    console.log("Discount Amount: ", discount);
}

simple();
hello("Steven");
optionalParams(1, "Shay");
optionalParams(2, "Naomi", "naomi@home.local");
restParams(1, 2, 3, 4);
defaultParams(2.98);
defaultParams(2.98, .75);
