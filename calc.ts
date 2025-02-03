let display = document.getElementById("display") as HTMLInputElement;


//function to append value to display
function appendValue(value: string): void{
    display.value += value;
}

//function to clear display
function clearDisplay():void{
    display.value = '';
}

//function to calculate and display result
function calculateResult():void{
    try{
        display.value = eval(display.value);
    }catch (error){
        display.value = 'Error';
    }
}