// Define Student class
class Student {
	constructor(name, grade, year) {
		this.name = name;
		this.grade = grade;
		this.year = year;
	}

	// Method to get a student's details as a string
	getDetails() {
		return `${this.name}, Grade: ${this.grade}, Year: ${this.year}`;
	}
}

// Initialize an empty array to store students
let students = [];

// Select elements
const studentForm = document.getElementById("student-form");
const studentList = document.getElementById("student-list");
const clearAllBtn = document.getElementById("clear-all");
const messageBox = document.getElementById("message");

// Display message function
function showMessage(message, type = "success") {
	messageBox.textContent = message;
	messageBox.style.color = type === "error" ? "red" : "green";
	setTimeout(() => (messageBox.textContent = ""), 3000);
}

// Render students to the DOM
function renderStudents() {
	// Clear the current list
	studentList.innerHTML = "";

	// Log current students array to the console
	console.log("Rendering students:", students);

	// Create list items for each student
	students.forEach((student, index) => {
		const li = document.createElement("li");
		li.innerHTML = `
        ${student.getDetails()} <button onclick="removeStudent(${index})">Remove</button>
      `;
		studentList.appendChild(li);
	});
}

// Add new student
studentForm.addEventListener("submit", (e) => {
	e.preventDefault(); // Prevent form submission

	// Retrieve input values
	const name = document.getElementById("name").value;
	const grade = document.getElementById("grade").value;
	const year = document.getElementById("year").value;

	// Create a new student instance
	const newStudent = new Student(name, grade, parseInt(year));

	// Log the newly created student to the console
	console.log("Adding new student:", newStudent);

	// Add the student to the students array
	students.push(newStudent);

	// Render the updated students list
	renderStudents();

	// Show success message
	showMessage(`Student "${newStudent.name}" added successfully!`);

	// Clear input fields
	studentForm.reset();
});

// Remove a specific student
function removeStudent(index) {
	// Log the index of the student being removed
	console.log(`Removing student at index ${index}`);

	// Remove the student from the students array
	students.splice(index, 1);

	// Render the updated students list
	renderStudents();

	// Show success message
	showMessage("Student removed successfully!");
}

// Clear all students
clearAllBtn.addEventListener("click", () => {
	// Log the current students array before clearing
	console.log("Clearing all students:", students);

	// Clear the students array
	students = [];

	// Render the updated students list
	renderStudents();

	// Show success message
	showMessage("All students cleared!");
});
