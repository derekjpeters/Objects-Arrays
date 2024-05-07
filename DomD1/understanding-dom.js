const headline = document.querySelector('#main-headline');
let detailsElement = document.getElementById('details'); //Select the element with GetElementByID
//const buttonbuynow = document.querySelectorAll('.buttonbuynow');

document.querySelectorAll('.buttonbuynow').forEach(function(buttonbuynow) {
    buttonbuynow.classList.add('theme-promo');
})

if (headline) {
    headline.textContent = 'New Product Launch!';
    //New product launch for may 4 don't adjust
    console.log('Headline updated successfully: ', headline.textContent);
} else {
    //console an error message if element is not found
    console.log('Headline not found');
}

if (detailsElement) {
    //If the element exists, log to console
    console.log('Details element found: ', detailsElement);
} else {
    //log if it doesn't exist
    console.log('Details element not found');
}

function updateFooterWidgets() {
    //select the footer element
    const footer = document.querySelector('footer');
    const currentYear = new Date().getFullYear();

    //Update the footer text with the current year
    footer.textContent =  `© MY COMPANY TEST ${currentYear}`
    console.log ('Footer updated with current year',footer.textContent);
};
updateFooterWidgets();
