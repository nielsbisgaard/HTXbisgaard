// calculator1/js/main.js

// Get the display element
let display = document.getElementById("display");

// Get the button elements
let buttons = document.querySelectorAll(".button");

// Add event listeners to the buttons
buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.textContent;

        // Handle the clear button
        if (value === "C") {
            display.textContent = "";
        }
        // Handle the backspace button
        else if (value === "<") {
            display.textContent = display.textContent.slice(0, -1);
        }
        // Handle the equals button
        else if (value === "=") {
            try {
                let result = eval(display.textContent);
                display.textContent = result;
            } catch (error) {
                display.textContent = "Error";
            }
        }
        // Handle the number and operator buttons
        else {
            display.textContent += value;
        }
    });
});