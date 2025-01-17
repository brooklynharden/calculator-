import tkinter as tk
from tkinter import ttk

#tkinter is for graphical user interface or math for advanced calculations

def button_click(clicked_button):
    current_text = result_variable.get()
    if button_click == '=':
        try:
            expression = current_text.replace("÷", "/").replace("x", "*")
            result = eval(expression)

            #Checks if the result is a whole number
            if result.is_integer():
                result = int(result)
            
            result_variable.set(result)
        except Exception as e:
            #If invalid input display 'Error'
            result_variable.set("Error")

    elif clicked_button == "C":
        #'C' respresents clearning the screen
        result_variable.set("")
    elif clicked_button == "%":
        try:
