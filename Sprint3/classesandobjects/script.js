/* class ClassName {
    constructor(parameter1, parameter2){
        this.property1 = parameter1;
        this.propetry2 = parameter2;
    } 

    method1() {
        return 
        console.log(this.property1);
    }
}; */

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getDetails(){
        return `${this.title} by ${this.author}, published in ${this.year}`;
    }
}

//Create a book instance
const book1 = new Book ('Mafia Life', 'Federico Varese', 2017);
const book2 = new Book ('The 48 Laws of Power', 'Robert Greene', 2011)

console.log(book1.getDetails());
console.log(book2.getDetails());

document.getElementById('book1').textContent = book1.getDetails();
document.getElementById('book2').textContent = book2.getDetails();

//Dog Constructor Function
function Dog(name,breed){
    this.name = name;
    this.breed = breed;
}

//Creat Dog Instance
const dog1 = new Dog('Fluffy', 'Pomeranean');
const dog2 = new Dog('Austin', 'Austrilian sheeradr mixed with american eskimo');

console.log(`Name: ${dog1.name}, Breed: ${dog1.breed}`);
console.log(`Name: ${dog2.name}, Breed: ${dog2.breed}`);

document.getElementById('dog').textContent = `Name: ${dog1.name}, Breed: ${dog1.breed}`;

let str = 'Hello';
str[0] = 'h';
console.log(str);

let arr = [1,2,3];
console.log(arr);
arr[0] = 99;
arr[1] = 100;
arr[2] = 101;
console.log(arr);
document.getElementById('immutable').textContent = `Immutable String: ${str}`;
document.getElementById('mutable').textContent = `Mutable Array: ${arr}`;

let a = 10; //Prim type
let b = a;
b = 20;
console.log(a);
console.log(b);

let obj1 = {name: 'Alice'}; //Reference Type
let obj2 = obj1;
console.log(obj2);
obj2.name = 'Bob';
console.log(obj2);

let arr1 = [1, 2, 3];
let arr2 = arr1;
console.log(arr2);
arr2[0] = 99;
arr2[1] = 101;
arr2[2] = 100;
console.log(arr2);