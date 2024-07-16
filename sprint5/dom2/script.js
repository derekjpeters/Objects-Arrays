//Setting Text with .textContent
const textExample = document.getElementById('example1').textContent = "Updated Text";
console.log(textExample);

//Setting attibutes with .set attribute
const updateImage = document.querySelector('#example2 img').setAttribute('src', '/sprint5/dom2/5c002b2cac00e2003b265f05.jpeg');

document.querySelector('#example3 > div').style.color = 'orange';

const example4 = document.querySelector('#example4 > div');
console.log(example4);
example4.className = 'newClass';
console.log(example4);
console.log(example4.classList);
example4.classList.add('additionalClass');
console.log(example4.classList);
example4.id = 'newId';
console.log(example4.id);

const parent = document.getElementById('child').parentNode;
console.log('Parent Node: ', parent);

const children = Array.from(document.getElementById('parent').children);
children.forEach(child => {
    child.textContent = 'Updated Text' + child.textContent;
});
console.log('Children: ', children);

//Create DOM elements
const newElement = document.createElement('div');
newElement.textContent = 'New Element';
document.getElementById('container').appendChild(newElement);
console.log(newElement);

const builtElement = document.createElement('div');
builtElement.textContent = 'Built Element'; //Set the text content
builtElement.setAttribute('class', 'builtClass');
builtElement.style.color = 'green';
document.getElementById('example5').appendChild(builtElement);
console.log(builtElement);

const child1 = document.createElement('div');
child1.textContent = 'Child 1';
document.getElementById('parentElement').appendChild(child1);

const child2 = document.createElement('div');
child2.textContent = 'Child 2';
document.getElementById('parentElement').appendChild(child2);

const insertElement = document.createElement('div');
insertElement.textContent = 'Inserted Element';
document.getElementById('reference').insertAdjacentElement('beforebegin', insertElement);



