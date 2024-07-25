// Select the main heading element by its ID
const mainHeading = document.getElementById('main-heading');

// Log the current text content of the main heading to the console
console.log('Main Heading Text:', mainHeading.textContent);

// Change the text content of the main heading
mainHeading.textContent = 'Updated: Welcome to the CSS Selectors and Box Model Project';

// Log the updated text content to the console
console.log('Updated Main Heading Text:', mainHeading.textContent);

// Select the first example text paragraph
const exampleText = document.querySelector('.example-text');

// Log the current color of the example text to the console
console.log('Example Text Color:', getComputedStyle(exampleText).color);

// Change the color of the example text using inline style
exampleText.style.color = 'purple';

// Log the updated color of the example text to the console
console.log('Updated Example Text Color:', getComputedStyle(exampleText).color);

// Function to add a new box model example
function addBoxModelExample(boxSizing) {
    // Create a new div element
    const newBox = document.createElement('div');
    
    // Add the box class to the new div
    newBox.classList.add('box');
    
    // Set the box-sizing style property
    newBox.style.boxSizing = boxSizing;
    
    // Set the text content based on the box-sizing value
    newBox.textContent = `${boxSizing} Example`;
    
    // Set a background color for visual distinction
    newBox.style.backgroundColor = boxSizing === 'content-box' ? '#ffe0b2' : '#c8e6c9';
    
    // Append the new box to the box model example section
    document.querySelector('.box-model-example').appendChild(newBox);
}

// Add new box model examples with different box-sizing values
addBoxModelExample('content-box');
addBoxModelExample('border-box');
