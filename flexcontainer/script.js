// script.js

// Function to log the current flex container styles
function logStyles() {
    const container = document.querySelector('.flex-container');
    console.log('Current justify-content:', getComputedStyle(container).justifyContent);
    console.log('Current align-items:', getComputedStyle(container).alignItems);
}

// Add event listeners to the buttons for justify-content
document.getElementById('justify-start').addEventListener('click', () => {
    document.querySelector('.flex-container').style.justifyContent = 'flex-start';
    logStyles();
});

document.getElementById('justify-center').addEventListener('click', () => {
    document.querySelector('.flex-container').style.justifyContent = 'center';
    logStyles();
});

document.getElementById('justify-end').addEventListener('click', () => {
    document.querySelector('.flex-container').style.justifyContent = 'flex-end';
    logStyles();
});

document.getElementById('justify-space-between').addEventListener('click', () => {
    document.querySelector('.flex-container').style.justifyContent = 'space-between';
    logStyles();
});

document.getElementById('justify-space-around').addEventListener('click', () => {
    document.querySelector('.flex-container').style.justifyContent = 'space-around';
    logStyles();
});

// Add event listeners to the buttons for align-items
document.getElementById('align-start').addEventListener('click', () => {
    document.querySelector('.flex-container').style.alignItems = 'flex-start';
    logStyles();
});

document.getElementById('align-center').addEventListener('click', () => {
    document.querySelector('.flex-container').style.alignItems = 'center';
    logStyles();
});

document.getElementById('align-end').addEventListener('click', () => {
    document.querySelector('.flex-container').style.alignItems = 'flex-end';
    logStyles();
});

document.getElementById('align-stretch').addEventListener('click', () => {
    document.querySelector('.flex-container').style.alignItems = 'stretch';
    logStyles();
});

// Initial log to show the default styles
logStyles();
