# pure function --> a function that doesn't alter the state of any of its inputs. Most functional languages like to deal with pure functions
# Python is not specifically a pure language or a functional language, but here we are simulating what a pure function does:

# This is not a pure function
def square_number(numbers):
    for number in numbers:
        number = number * number
    return numbers


numbers = [1,2,3,4,5,6,7,8,9,10]
result = square_number(numbers)
print(result)
print(numbers)

# Making it pure:
def square_number_pure(numbers):
    new_numbers = []
    for number in numbers:
        new_numbers.append(number * number)
    return numbers

# Non-high order function --> Imperative Programming
# We enumerate everything the machine will do for us; we tell it exactly what we want it to compute. 

def multiply_by2(n):
    return n*2
print(multiply_by2(10))

# Higher order function
# Accept a parameter that generates a function
# Allows you to generate new function to handle things
# More creative than imperative at times 
def multiply_hof(by):
    # Make a new function to return
    def multiply_n(numbers):
        result = []
        for n in numbers:
            result.append(n*by)
        return result
    return multiply_n

m3 = multiply_hof(3)
print(m3([1,2,3,4]))


# FUnctional languages typically use anonymous functions where you don't usually give specific/descriptive names to functions
# But imperative languages do. 
# Here we used an imperative language and made it act functional. We get the best of both worlds!