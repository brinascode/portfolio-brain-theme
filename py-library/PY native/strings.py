def say_hi(name,age,major):
        return "Hi there " + name + "\n apparently you are " + str(age)  + "\n And your major is " + major
#print(say_hi(name="Sabrina",age=20,major="CS"))


def count_letter(letter,word):
    print "Let's count how many times the letter " + letter + "appears in this word!"
    count = word.count(letter)
    return "It appears " + str(count) + " times!"
#print(count_letter(letter="a",word="Happiness is bliss"))

def printer():
    message = raw_input("What is the message you want to print?")
    times = int(raw_input("How many times do you want to print your message?"))
    print message*times
#printer()

def password_checker():
    print ("Enter a password that has at least 5 characters and a number or special character \n")
    password = raw_input("Enter your password please.")

    if len(password) > 5 and password.isalpha() == False:
        print "Great, this password is strong enough!"
    elif len(password) < 5:
        print "Your password is too short, try again"
        password_checker()
    elif password.isalpha() == True:
        print "You need to add a number or special character to your password. Try again please"
        password_checker()
#password_checker()



def the_reverser(word):
    new_word = word[-1::-1]
    return new_word
#print(the_reverser("hannah"))


def palindrome_checker(word):
    if word[-1::-1] == word:
        return "Your word " + word + " is a palindrome!"
    else:
        return "Your word " + word + " is not a palindrome!"
#print(palindrome_checker(word="hannah"))