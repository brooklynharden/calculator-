var display = document.getElementById("display");
//function to append value to display
function appendValue(value) {
    display.value += value;
}
//function to clear display
function clearDisplay() {
    display.value = '';
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
