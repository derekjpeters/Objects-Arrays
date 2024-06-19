// Select the necessary elements
const launchButton = document.getElementById('launchButton');
const countdownDisplay = document.getElementById('countdownDisplay');
const rocket = document.getElementById('rocket');

// Add an event listener to the launch button
launchButton.addEventListener('click', () => {
  let countdown = 10; // Initialize the countdown value
  countdownDisplay.textContent = countdown; // Display the initial countdown value

  // Create an interval to update the countdown every second
  const countdownInterval = setInterval(() => {
    countdown--; // Decrement the countdown value
    countdownDisplay.textContent = countdown; // Update the display

    if (countdown <= 0) {
      clearInterval(countdownInterval); // Clear the interval when countdown reaches 0
      countdownDisplay.textContent = 'Blast Off!'; // Display the blast off message
      rocket.style.transition = 'bottom 2s'; // Add transition effect for the rocket launch
      rocket.style.bottom = '300px'; // Move the rocket up
    }
  }, 1000); // Interval of 1 second
});
