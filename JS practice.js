//************************************************VERY SIMPLE CALCULATOR IN JS***************************************************
let a = 6, b = 5;
let operation = "+";
if(operation == "+") {
    console.log("Addition:",a+b);
}
else if(operation == "-") {
    console.log("Subtraction: ",a-b);
}
else if(operation == "*") {
    console.log("Multiplication:",a*b);
}
else if(operation == "/") {
    console.log("Division:",a/b);
}
else console.log("Get out!");







//************************************************FUNCTIONS PRACTICE IN JS***************************************************
function add(a,b) {
    console.log("Addition:",a+b);
}
add(3,4);


function square(n) {
    console.log("Square",n**n)
}
square(2);

function areaOfcircle(r) {
    console.log("Area of circle:",2*3.14*r)
}
areaOfcircle(2);










//************************************************Template literal practice in js***************************************************
let a = 4;
let b = 7;
let c = "addition";
let f = "Multiplication";
console.log(`After ${c} the answer is ${a+b}.`);
console.log(`After ${f} the answer is ${a*b}.`);



d = "My name is";
e = "I am learning";
console.log(`${d} Maimoona and ${e} Javascript.`);
