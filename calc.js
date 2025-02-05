var display = document.getElementById("display");

// Function to append value to display
function appendValue(value) {
    display.value += value;
}

// Function to clear display
function clearDisplay() {
    display.value = '';
}

// Function to calculate and display result
function calculateResult() {
    try {
        var expression = display.value;

        // Check if the expression contains '√', and if so, calculate the square root
        expression = expression.replace(/√(\d+)/g, function(match, number) {
            return Math.sqrt(number); // Replace '√number' with its square root
        });

        // Replace the ÷ symbol with / for division and evaluate the expression
        expression = expression.replace(/÷/g, '/');
        
        // Evaluate the expression using Function constructor
        display.value = new Function("return ".concat(expression))();
    } catch (error) {
        display.value = 'Error'; // If there's any error in calculation
    }
}

// Function to backspace
function backspace() {
    display.value = display.value.slice(0, -1);
}
