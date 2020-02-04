user1 = {
    "username": "lollipop",
    "age": 20,
    "talent": "coding"
}

user2 = {
    "username": "jessica",
    "age": 21,
    "talent": "singing"
}

user3 = {
    "username": "superkid",
    "age": 19,
    "talent": "gymnastics"
}

user4 = {
    "username": "yolaa",
    "age": 19,
    "talent": "drawing"
}

users = [user1,user2,user3,user4]
for index,item in enumerate(users):
    print (index+1), item


def print_all_usernames():
    for i in user1:
        if i == "username":
            print (user1[i],user2[i],user3[i],user4[i])
#To practice looping multiple dictionaries that have the same keys.
#print_all_usernames()



