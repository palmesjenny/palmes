console.log("hello world,");

const myName = "jenny";
let age = 60;
const number = 1234567809;
const address = "gawahon";

console.log('Name: s{myName}');
console.log('Name: ${myName}');
console, log('Age: ${age}');
consolke.log('Number: ${number}');
console.log('Address: ${address}');

function greet(name) {
    return 'good morning,${name}';

}
console.log(greet(jenny)); // good morning, jenny

function mdas(NUM1, NUM2) {
    let m = NUM1 * NUM2;
    let d = NUM1 / NUM2;
    let a = NUM1 - NUM2;

    return ('values: ${num1} and ${num2}, product ${m}, Quotient: ${d}, sum: ${a}, diff: ${s}');
}

console.log(mdas(5, 3));

const heading = document.querySelector("h1");
console.log(heading);

const contactHeading = document.querySelector("#contact h2");
console.log(contactHeading);

const projecttHeading = document.querySelector("#services h2");
console.log(projectsHeading);

