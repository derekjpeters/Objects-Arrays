const addPet = {
    type: 'dog',
    name: 'Pepper',
    age: '8',
    breed: 'Boxer',
    color: 'red',
    makeSound: function() {
        console.log(`${this.name} says woof!`);
    }
}


//Log the pet details and call the make sound method
console.log("Pet Registration");
console.log(addPet);
addPet.makeSound();
let pepperAge = addPet['age'];
console.log (pepperAge);

let superHero = {
    firstName: 'Justin',
    superPower: 'Always Right',
    superIntro: function() {console.log (`${this.firstName} has a super power of being ${this.superPower}!`);
    }
}
superHero.superIntro();

console.log(superHero);

function Student (name, age, gradeLevel, courses) {
    this.name = name;
    this.age = age;
    this.gradeLevel = gradeLevel;
    this.courses = courses;

    this.study = function() { 
        console.log(`${this.name}'s age is ${this.age} and they are studying ${this.courses}. They are currently in the ${this.gradeLevel}th grade.` );
    }
}

let john = new Student('John', 15, 9, ['Math', 'Science', 'Theater']);



console.log(john);
john.study(); 

let cake = {
    flavor: 'lemon pound',
    layers: 1,
    price: 14.99,
    decorations: ['lemon icing', 'sprinkles', 'personal message']
}

console.log(cake.flavor);
let currentFlavor = cake['flavor'];
let priceSold = cake['price'];
console.log(priceSold);
console.log(currentFlavor);
console.log(cake);

delete cake.layers;
console.log (cake);

const primitives = [true, 1, 'example', null, undefined];
console.log(primitives);
console.log(primitives[0]);
console.log(primitives[1]);
console.log(primitives[2]);
console.log(primitives[3]);
console.log(primitives[4]);

primitives.push('new element');
console.log (primitives);
console.log(primitives[5]);




