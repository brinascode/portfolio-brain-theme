def ask_number():
    name = input("Hi, what's your name?")
    number = int(input("What's your favorite number?"))
    print (f'Hi {name}, your favorite number is {number}')

    if number < 10:
        print ("Think bigger next time!")
    else:
        print ("You think big!")

#ask_number()

def natural_langs():
    languages = ["English","French","Spanish","Portuguese","Baoule","Arabic","Chinese","Russian","Amharic","Dioula"]
    print ("The first 3 languages are: " + languages[0],languages[1],languages[2])
    print ("The last language is: " + languages[9])

    new_lang = input("Add a new language to the list!")

    languages.append(new_lang)

    for lang in languages:
        print (lang)

#natural_langs()

def names_and_ages():
    names = {
        "Sabrina":20,
        "Laura":35,
        "Jennyfer":15,
        "Carl":13,
        "Tyler":21,
        "Pauline":55,
        "Marthe":53,
        "Hazel":11,
        "Obama":54,
        "Michelle": 54
    }

    name_to_check = input("Whose age would you like to check?")
    found = False

    for key in names:
        if key == name_to_check:
            print ("That user is " + str(names[key]) + " old" )
            found = True

    if found == False:
        print ("I don't know that user")

#names_and_ages()

def make_a_name(name1,name2):
    new_name = name1[0] + name1[1] + name1[2] + name2[-3] + name2[-2] +  name2[-1]
    print (new_name)
#make_a_name("Mary Jones","John Smith")