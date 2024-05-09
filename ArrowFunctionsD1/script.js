/* //Introduced in 2015 => is an arrow function
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

*/

//array.forEach((currentvalue, index, array) => {
//logic of what we are wanting to do to the data
//})

const nums = [1, 2, 3, 4, 5];
nums.forEach((nums) => {
	console.log(nums * 2);
});

const user = {
	name: "John",
	regularFunciton: function () {
		console.log("Regular Function 'this':", this.name); //John
	},

	arrowFunction: () => {
		console.log("Arrow Function 'this',", this.name);
	},
};

user.regularFunciton();
user.arrowFunction();

const createUser = (name, email) => ({ name, email });
console.log("User Object Created", createUser("Brock", "brock@brock.com"));

const fruits = ["apple", "grapes", "oranges", "plums"];
//log each fruit name to the console
const logFruit = (fruit, index) => {
	console.log(`Fruit ${index + 1}`, fruit);
};
fruits.forEach(logFruit);

//create a new array to hold the lengths of the fruit names
const fruitNameLengths = [];
fruits.forEach((fruit) => fruitNameLengths.push(fruit.length));

console.log("Lengths of each fruit name: " + fruitNameLengths);
console.log(fruitNameLengths);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Filter numbers greater than 5
const greaterThanFive = numbers.filter((num) => num >= 5);
console.log(`Numbers Greater than 5: ${greaterThanFive}`);

const oddNumbers = numbers.filter((num) => num % 2 !== 0);
console.log(`Odd Numbers: ${oddNumbers}`);

const employees = [
	{ name: "Alice", age: 31 },
	{ name: "Bob", age: 25 },
	{ name: "Charles", age: 40 },
	{ name: "Jill", age: 20 },
];

//filter by age
const olderEmployees = employees.filter((employee) => employee.age > 30);
console.log(`Employees older than 30: ${olderEmployees}`);
console.log(olderEmployees);

const rectangles = [
	{ width: 10, height: 5 },
	{ width: 6, height: 7 },
	{ width: 8, height: 9 },
];

const area = rectangles.map((rect) => rect.width * rect.height);
console.log(area);

// List of players
const players = [
	{ name: "Lionel Messi", position: "Forward", goals: 2, injured: false },
	{ name: "Cristiano Ronaldo", position: "Forward", goals: 1, injured: false },
	{ name: "Neymar Jr.", position: "Forward", goals: 3, injured: false },
	{ name: "Paul Pogba", position: "Midfielder", goals: 0, injured: true },
	{ name: "Kevin De Bruyne", position: "Midfielder", goals: 1, injured: false },
	{ name: "Sergio Ramos", position: "Defender", goals: 0, injured: false },
	{ name: "Manuel Neuer", position: "Goalkeeper", goals: 0, injured: false },
];

//Log the team lineup using forEach
console.log("\nTeam Lineup");
players.forEach((player, index) => {
	console.log(
		`${index + 1}. ${player.name} (${player.position} - Goals: ${player.goals})`
	);
});

//filter out injured players
const activePlayers = players.filter((player) => !player.injured);
console.log("\nActive Players:");
activePlayers.forEach((player) =>
	console.log(`${player.name} (${player.position});`)
);

const performanceRatings = activePlayers.map(player => ({
    name: player.name,
    position: player.position, 
    goals: player.goals,
    rating: player.goals * 2 //Example: you get 2 points added for each goal to product a rating
}));

console.log("\nPlayer Performance Ratings:");
performanceRatings.forEach(performance => {
    console.log(`${performance.name} (${performance.position} - Rating: ${performance.rating})`);
});

