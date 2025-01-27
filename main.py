#Addition Function
def add(num1, num2):
    sum = num1 + num2
    return sum

#Subtraction Function
def subtract(num1, num2):
    sum = num1 - num2
    return sum


#Division Function
def divide(num1, num2):
    sum = num1 / num2
    return sum


#Modulo Function
def mod(num1, num2):
    sum = num1%num2
    return sum

#Multiplication Function
def multiply(num1, num2):
    sum = num1*num2
    return sum

Print("Please Selection Operate: -\n" \
    "1. Add\n"
    "2. Subtract\n"
    "3. Divide\n"
    "4. Modulo\n"
    "5. Multiply\n")

#User Input
userSelect = int(input("Select Operation 1, 2, 3, 4, 5: "))

Number_1 = int(input("First Number: "))
Number_2 = int(input("Second Number: "))

if userSelect == 1:
    add(Number_1, "+", Number_2, "=")

elif userSelect == 2:
    subtract(Number_1, "-", Number_2, "=")

elif userSelect == 