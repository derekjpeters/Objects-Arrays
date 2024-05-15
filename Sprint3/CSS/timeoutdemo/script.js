// JavaScript to change the color of the box
document.addEventListener("DOMContentLoaded", () => {
    const colorBox = document.getElementById("colorBox");
    const colors = ["lightblue", "lightgreen", "lightcoral", "lightgoldenrodyellow", "lightpink"];
    let currentColorIndex = 0;

    function changeColor() {
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        colorBox.style.backgroundColor = colors[currentColorIndex];
        setTimeout(changeColor, 2000); // Change color every 2 seconds
    }

    setTimeout(changeColor, 2000); // Initial call to start the color change loop
});
