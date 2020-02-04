destinations = ["Brazil", "Angola", "Portugal", "Columbia"]
def add_destination():

    choice = int(raw_input("Where would you like to add this new destination?"
                           " \n Enter 1 for a specific index and 2 for the end of the list: "))
    if choice == 1:
        index = int(raw_input("At what index of the list would you like to add it? : "))
        new_destination = raw_input("Enter your new destination now : ")
        destinations.insert(index, new_destination)
        return destinations
    else:
        new_destination = raw_input("Enter your new destination now: ")
        destinations.append(new_destination)
        return destinations

#print(add_destination())

def remove_destination():
    choice = int(raw_input("What would you like to do? \n " +
                           "1: Remove a specific destination \n " +
                           "2: Remove a destination at an index \n"))
    if choice == 1:
        old_list = destinations
        remove_this = raw_input("Enter the destination you would like to remove: ")
        destinations.remove(remove_this)
        print "The old list was: " + ",".join(old_list) + "\n"
        print "The new list is: " + ",".join(destinations)

    elif choice == 2:
        old_list = destinations
        index = int(raw_input("What index?"))
        destinations.pop(index)
        print "The old list was: " + ",".join(old_list)
        print "The new list is: " + ",".join(destinations)

        '''
        Both of these options are doing the same thing --> 
        old_list is not actually capturing the old list. It is just pointing to it again!
        '''
#remove_destination()

#Looping through lists!

def number_list_content(list):
    format = int(raw_input("What kind of formatting do you want? Enter 1 for regular python formatting and enter 2 for human formatting: "))
    if format == 1:
        for index,item in enumerate(list):
            print index,item
    elif format == 2:
        for index,item in enumerate(list):
            print index+1,item
#naturnumber_list_content(destinations)



