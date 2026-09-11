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

function mdas(num1, num2) {
    let m = num1 * num2;
    let d = num1 / num2;
    let a = num1 - num2;

    return ('values: ${num1} and ${num2}, product ${m}, Quotient: ${d}, sum: ${a}, diff: ${s}');
}

console.log(mdas(5, 3));

const heading = document.querySelector("h1")
console.log(heading);

const contactHeading = document.querySelector("#contact h2");
console.log(contactHeading);

const serviceHeading = document.querySelector("#services h2");
console.log(serviceHeading);

const projectHeading = document.querySelector("#projects h2");
console.log(projectHeading);

//Text Context

heading.textContent = "My portfolio";
contactHeading.textContent = "Let's Connect!";
serviceHeading.textContent = "My Services";
projectHeading.textContent = "My Projects";

//.style
heading.style.color = "purple";
heading.style.backgroundColor = "yellow";
contactHeading.style.color = "purple";
serviceHeading.style.color = "purple";
projectHeading.style.color = "purple";