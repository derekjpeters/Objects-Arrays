//Store <h1> set text with.text content
const headingElement = document.querySelector('h1');
let heading = headingElement.textContent;
console.log(heading);

headingElement.textContent = 'Reviewing DOM';

const myElement1 = document.getElementById('myh1');
console.log(myElement1.className);
console.log(myElement1.id);

document.body.style.fontFamily = 'Verdana, Geneva, Tahoma, sans-serif';

const solutionSectionElement = document.querySelector('.about-solutions');
console.log(solutionSectionElement.children);
console.log(solutionSectionElement.parentNode);

const childRecap = document.querySelector('.recap');
console.log(childRecap.children);

//Creating DOM elements with CreateElement

const paragraph = document.createElement('p');
paragraph.textContent = 'My Favorite Number is 7';
document.body.appendChild(paragraph);

const heading1 = document.createElement ('h2');
heading.textContent = 'Process has ended';
document.body.prepend(heading);

//Add elements to the DOM with .insertAdjacentElement
const orderedList = document.querySelector('ol');
const p1 = document.createElement('p');
p1.textContent = "List Begins Here";
orderedList.insertAdjacentElement('beforebegin', p1);

let linkExample = document.getElementById('link-element')
linkExample.setAttribute('href','https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model');

let parentElement = document.getElementById('parent');
let childElement = document.createElement('div');
childElement.textContent = 'Child Element';
parentElement.appendChild(childElement);

let countdown = 10;
let intervalID = setInterval(function() {
    if(countdown > 0) {
        document.getElementById('timer').textContent = 'countdown';
        countdown--;
    } else {
        clearInterval(intervalID);
    }
}, 5000);





