# JavaScript Objects Lesson

This lesson introduces the concepts of objects in JavaScript, their importance, and practical applications.

## Objectives

By the end of this lesson, students will be able to:

* Explain what objects are and how they represent real-world concepts.
* Create objects with properties and methods.
* Access and modify object properties.
* Call methods on objects to perform actions.

## Problems

The following problems are designed to reinforce object concepts:

**1. The Pet Store**

* Create objects to model different pets (dogs, cats, etc.).
* Each pet object should have properties (type, name, age, breed, color).
* Include a `makeSound()` method to output a sound appropriate for the animal.

**2. Student Records**

* Create an array to store multiple student objects.
* Each student object should have properties (firstName, lastName, gradeLevel, courses).
* Include the following methods:
    * `getFullName()`: Returns the student's full name.
    * `addCourse()`: Adds a new course to the student's course list.

**3. Recipe Manager**

* Model recipes using objects with the following properties:
    * title
    * servings
    * ingredients (an array of ingredient objects)
* Each ingredient object should have properties (name, quantity, unit).
* Include a `scaleRecipe()` method to adjust ingredient quantities based on servings.

**4. Library System**

* Design objects to represent books, patrons, and the library itself. 
* **Book:**
    * title
    * author
    * ISBN
    * available (true/false)
* **Patron:**
    * name
    * libraryCardNum
    * booksOut (array of borrowed books)
* **Library:**
    * name
    * inventory (array of books)
* Include methods like:
    * `checkOutBook(patron, book)`
    * `returnBook(book)`

## Additional Notes

* Encourage students to start with simple object structures and gradually add complexity.
* Emphasize the use of `console.log` for testing and debugging.
* Discuss the connection between objects and the concept of classes/blueprints (if time permits).
