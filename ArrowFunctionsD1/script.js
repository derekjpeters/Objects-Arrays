//Introduced in 2015 => is an arrow function
//(parameters) => {functional body}

//function (parameters) { 
    //return callback
//  }

const add = (a, b) => a + b;
console.log("Addition of (2+3):", add(2,3)); //target output should be 5

const greet = () => "How are you doing, today?";
console.log("Greet:", greet());

const square = n => n * n;
console.log('Square of 9 is', square(9));

const createUser = (name, email) => ({name, email});
console.log("User Object Created", createUser("Brock", "brock@brock.com"));

const greetUser = (name = "User") => `Hello, ${name}!`;
console.log("Greet with default arg:", greetUser());
console.log("Greet with a provided argument:", greetUser("Brock"));

const user = {
    name: "John",
    regularFunciton: function () {
        console.log("Regular Function 'this':", this.name); //John
    },

    arrowFunction: () => {console.log("Arrow Function 'this',", this.name);}
}

user.regularFunciton();
user.arrowFunction();

const myObject = {
    name: "my object",
    logNameRegular: function() {
        console.log(this.name);
    }
};

const myObject2 = {
    name: "my object2",
    logNameArrow: () => {
        console.log(this.name); //Should be blank or undefined
    }
};
myObject.logNameRegular();
myObject2.logNameArrow();

const students = [
    {name: "Alice", score: 89},
    {name: "Bob", score: 92},
    {name: "Charles", score: 88},
    {name: "Jill", score: 98}
];

console.log(students);

//Filter students who scored above 90 percent on a test
const topStudents = students.filter(student => student.score > 90);
console.log(topStudents);

function argCount() {
    console.log(arguments.length);
}
argCount();
