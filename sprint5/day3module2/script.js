function htmlEventHandler() {
	alert("Product added to cart with HTML attribute");
}

const addEventListenerButton = document.getElementById("addEventListenerButton");
addEventListenerButton.addEventListener("click", () => {
	alert("Product added to cart using addEventListener");
});

//dig into the event object
const inputField = document.getElementById('email');
inputField.addEventListener('input', (event) => {
    // console.log('Event Object: ', event);
    // console.log('Input Value: ', event.target.value);
});

const preventDefaultLink = document.getElementById('preventDefaultLink');
preventDefaultLink.addEventListener('click', (event) => {
    event.preventDefault(); //prevents default action (navigation)
    alert('Default action prevented. Link will not navigate');
});

//Form Submission Example
const subscribeForm = document.getElementById('subscribeForm');
subscribeForm.addEventListener('submit', function(event){
    event.preventDefault(); //prevents default submission for testing
    alert('Form submission button is working: Mock: Thank you for subscribing to our newsletter');
});

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (event) =>{
    event.preventDefault(); //Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessages = document.getElementById('formMessages');
    const loadingIndicator = document.getElementById('loadingIndicator');

    formMessages.innerText = '';
    formMessages.className = '';
    loadingIndicator.style.display = 'block';

    setTimeout(() => {
        if (name && email && message) {
            formMessages.innerText = `Thank you, ${name}! Your message has been sent. Give us 24 hours to review your response`;
            formMessages.className = 'success'
            //simulate sending a message
            console.log('Message Sent: ', {name, email, message});
            //reset the form
            contactForm.reset();
        } else {
            alert('Please fill out all fields before submitting the form');
        }
    }, 2000);
});



