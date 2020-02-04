import re




# None example
spain_txt = "The rain in Spain"
none_example = re.search("Portugal",spain_txt)
print(none_example) # This will return None  ---> Is none in Python the same thing as Null?




# More practice with sets!
'''
Remember, there is a difference between this notation: [] and just putting in the words or letters without the brackets.
With the brackets you get a set of characters, without the brackets the letters form one entity.
'''
text1 = "Today I'm having a great day! I love being happy and blessed!! Everything is wonderful"
returns_lowercase_only = re.findall("[a-z]",text1) # Will return the list of letters from a-z but only lower case.
returns_uppercase_too = re.findall("[A-z]",text1) # Will return the list of letters from a-z with upper case

text2 = "Once upon a time, a young boy, grimped up a tree. And when the branch casse, the young boy tombe parterre. HAHAH"
setof_first_to_last = re.findall("[a-c]",text2) # Will look for these  add them individually in t
setof_onlytheseletters = re.findall("[boy]",text2) # Will look for these 3 letters and add them individually in the list


# In sets, special characters don't matter because they're treated as special characters themselves:
money_txt = "I like making cash moneeyy $$$$. Call me MamaCash$. But if you feelin generous, my cash app is $mamabroke"
dollar_signs = re.findall("[$]",money_txt)
print(dollar_signs)


# Sets are not the same as finding actual words. Sets give us the individual characters
actual_word = re.findall("boy",text2)
actual_word2 = re.findall("young",text2)




# Findall()
should_return_empty = re.findall("boo",text1)
print(should_return_empty)
#Does findall also give us the position of the occurences? No. Only returns them in order in a list

print(actual_word2)


# Matches?
text3 = "Life is just so beautiful! There is so much to do! I am just so exciteeed! Lovely day"
res1 = re.findall("so",text3)
res2 = re.findall("^.",text3)
res22 = re.findall("L",text3)
res3 = re.findall("Life",text3)
res4 = re.findall("^Li",text3) # Will return something, ["Li"] because the string starts with that
res44 = re.findall("^so",text3) # Will return an empty list aka, returns a False.
if (res44):
    print("Yaay")
else:
    print("Naa") # This is what will be returned.


# re.search() is used to search for a match. Will return a match object if there's a match :)
# result.start() returns the first match's first index; result.end()
# result.end() returns the last index of the first match + 1
txt = "Hi My name is Sabrina. What is your name?"
x = re.search("Sabrina",txt)
index_of_match = x.start()
if (x):
    print("Yes there's a match at this index! : " + str(index_of_match))
    print("Now we will print the match object that re.search() actually returns")
    print(x)
else:
    print("Nooo we don't this time! Try again :)")


# More
my_text = "mother motherly mothem monthy beauty soup rain ain aint faint faite"
return1 = re.findall(r"\Bmoth",my_text) # The ENTIRE string must end with that in order for it to return true!
if(return1):
    print ("Yes, it did return something")
    print(return1)
else:
    print('It did not return anything')
    print(return1)