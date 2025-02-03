let display = document.getElementById("display") as HTMLInputElement;


//function to append value to display
function appendValue(value: string): void{
    display.value += value;
}

//function to clear display
function clearDisplay():void{
    display.value = '';
}

//function for square root
function calculateSquareRoot():void{
    let number = parseFloat(display.value);

    if (isNaN(number)){
        display.value = 'Error'; //if inpu not a number show error
    }else if (number < 0){
        display.value = 'Error'; //no sqroot for negative numbers
    }else{
        display.value = Math.sqrt(number).toString(); //calculate sq and show result
    }
}

//function to backspace
function backspace(): void{
    display.value = display.value.slice(0,-1);
}

//function to calculate and display result
function calculateResult():void{
    try{
        let expression  = display.value.replace(/÷/g,'/');
        display.value = new Function(`return ${expression}`)();
    }catch (error){
        display.value = 'Error';
    }
}