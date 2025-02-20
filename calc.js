var display = document.getElementById("display");
//function to append value to display
function appendValue(value) {
    display.value += value;
}
//function to clear display
function clearDisplay() {
    display.value = '';
}
//function for square root
function calculateSquareRoot() {
    var number = parseFloat(display.value);
    if (isNaN(number)) {
        display.value = 'Error'; //if inpu not a number show error
    }
    else if (number < 0) {
        display.value = 'Error'; //no sqroot for negative numbers
    }
    else {
        display.value = Math.sqrt(number).toString(); //calculate sq and show result
    }
}
//function to backspace
function backspace() {
    display.value = display.value.slice(0, -1);
}
//function to calculate and display result
function calculateResult() {
    try {
        var expression = display.value.replace(/÷/g, '/');
        display.value = new Function("return ".concat(expression))();
    }
    catch (error) {
        display.value = 'Error';
    }
}
