

# Reading from a file
def reading(file):
    with open(file, "r") as my_file:
        contents = my_file.readlines()  # Returns the file contents in an array with each line as an item
        contents2 = my_file.read()      # Returns the file contents as a string

        #print(contents)
        print(contents2)


        for line in contents:  # This prints out each line in the array of contents
            print(line)

reading("file.txt")




# Writing to append
def append_to(file):
    with open(file, "a") as my_file:
        my_file.writelines("I am appending this! The line before me should be I'm done writing :)")
append_to("file.txt")


# Writing to overwrite
def overwrite(file):
    with open(file, "w") as my_file:
        my_file.writelines(["FirstString","SecondString","ThirdString"])
        my_file.writelines("I'm adding this line using Python!")
        my_file.write("I'm done writing!")
# overwrite("file.txt")



# How it used to be done before: but with open() is probably better because it closes the file automatically for you
'''
file = open("file.txt", "w")
file.write("Heey")
file.close()
'''



