console.log("Hello world")

const Myname = "palmes";
console.log("name: " + Myname);
let age = 60;
let number = "09123456789";
console.log("Age: " + age)
console.log("Number: " + number);

const address = "Brgy. x1 gawahon";
console.log("Address: " + address);

function greet(name) {

    return `good morning, ${name}`;


}
console.log(greet("rene"))

function mdas(a, b) {
    let mul = a * b;
    let div = a / b;
    let sum = a + b;
    let sub = a - b;
    return (`values: ${a} and ${b}. \n product: ${mul}, \n qoutient: ${div}, \n sum: ${sum},\n difference: ${sub}`);
}
console.log(mdas(5, 3));

const heading = document.querySelector("h1");
console.log(heading);


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



//Event Listeners
const toggleButton = document.querySelector('#switch');
const body = document.querySelector('body');
let isOff = false;

toggleButton.addEventListener("click", function () {
    isOff = !isOff;

    if (isOff) {
        body.style.backgroundColor = "black";
        body.style.color = "white";

    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
});








