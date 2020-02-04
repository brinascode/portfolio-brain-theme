''' DR GREENE's INSTRUCTIONS:
# first install library
#pip install python-twitter
#1 sign up for twitter
#2 Go to https://apps.twitter.com/
#3 Create an App
#4 Should be able toi use http://www.marymount.edu for webpage if you do not have one
#5 once created go to Keys and Access tokens
#6 Generate Access Token
#7 use this data for the fields below
#  get credentials.
Code starts here:
'''


import twitter, nltk
import matplotlib.pyplot as plt

api = twitter.Api(consumer_key='UCVx5Mi2WrTdliEhoGRHhqqqg',
                      consumer_secret='vnoGTHh8iH1fXql1xxLOv3HnpElEr95aoi9ylVufo0VYdfX4WE',
                      access_token_key='872171075232305152-z0bzFIEcQIjETRQdrIWeGeuQpuTLGsi',
                      access_token_secret='LAVn4Eg2XYzleVe0bbiWfWtwFnl5pycrlk8qyzP70Y9LX',
                  tweet_mode='extended')

#Creating the function we will use to get the tweets
def get_tweets(handle,since_id=0,max_id=0,count=200):
    if max_id == 0:
        statuses = api.GetUserTimeline(screen_name=handle, count=count, exclude_replies=True, include_rts=False,since_id=since_id)
    else:
        statuses = api.GetUserTimeline(screen_name=handle, count=count, exclude_replies=True, include_rts=False,max_id=max_id)
    return statuses



#To understand the api
brinascode_statuses = get_tweets(handle='brinascode')  # This returns a list of 'Status' objects in which contains info/metadata pertaining to each tweet.
                                                       # To get an individual tweet, you need to do status[index].full_text

data = []
corpora = []

def get_tweets_from(list_of_handles):     # Will add to our data list the following dictionaries:{"handle":"value","statuses":value}
    for handle in list_of_handles:
        data.append({"handle":handle,"statuses":get_tweets(handle=handle)})


def make_corpora(data_list):             # Will add to our corpora list the following dictionaries, for each data item or dictionary in the data list: {"handle":"value","full_tweets_text:"value""}
    for item in data:
        text = ""
        for status in item["statuses"]:
            text += " " + status.full_text
        corpora.append({"handle":item["handle"],"full_tweets_text":text})

def create_graph(corpora):
    for dict in corpora:
       # We get each word of the corpus and save it in a list
       word_list = nltk.word_tokenize(dict["full_tweets_text"])


       #We go in the list to clean up. We remove single letters.
       for item in word_list:
           if len(item) == 1:
               word_list.remove(item)


       # Creating our {"word":"hello",frequency:"2"} dictionary
       word_frequency = {}
       for word in word_list:
           if word in word_frequency:
               word_frequency[word] += 1
           else:
               word_frequency[word] = 1



       # We find the word with the highest frequency
       highest = 1
       for key in word_frequency:
           if word_frequency[key] > highest:
               highest = word_frequency[key]


       # We sort the items from highest to lowest frequency
       sorted_word_frequencies = []
       for i in range(highest, 0, -1):
           for word in word_frequency:
               if word_frequency[word] == i:
                   sorted_word_frequencies.append({"word":word,"frequency":word_frequency[word]})


       #Plotting the graph
       plt.title("Zipf curve for: @ " + dict['handle'])
       plt.xlabel("Word Rank (Most used to less used)") # Chose not to put the actual words because they are too many
       plt.ylabel('Frequency')
       x_values = []
       y_values = []
       count = 0
       for item in sorted_word_frequencies:
           x_values.append(count)
           y_values.append(item["frequency"])
           count+=1
       plt.xticks(rotation=60)
       plt.plot(x_values,y_values)
       plt.show()

       #Plotting the log graph
       plt.title("Zipf log-curve for: @" + dict["handle"])
       plt.xlabel("Word Rank (Most used to less used)")  # Chose not to put the actual words because they are too many
       plt.ylabel('Frequency')
       x_values = []
       y_values = []
       count = 0
       for item in sorted_word_frequencies:
           x_values.append(count)
           y_values.append(item["frequency"])
           count += 1
       plt.xticks(rotation=60)
       plt.yscale("log")
       plt.xscale("log")
       plt.plot(x_values, y_values)
       plt.show()



get_tweets_from(["realDonaldTrump"]) # The function can receive multiple handles, but I will only put one at a time (much faster)
make_corpora(data)
create_graph(corpora)

