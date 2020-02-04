#Importing the libraries we need
import nltk, ssl

try:
    _create_unverified_https_context = ssl._create_unverified_context
except AttributeError:
    pass
else:
    ssl._create_default_https_context = _create_unverified_https_context

#nltk.download()
#nltk.download("punkt")


sentence = "Mr. fair-headed Cat was in the hat"
tokens = nltk.word_tokenize(sentence) #We tokenize by words.
print (tokens)
print (sentence.split(" "))

text = "Mr. Cat in the har isn't at the mall. I hate cats!" \
        "Tweet number 1 goes like ... this and continues on"
sentences = nltk.sent_tokenize(text) # We tokenize by sentences.
print (sentences)


all_tokenized_text = []
for sentence in sentences:
   all_tokenized_text.append(nltk.word_tokenize(sentence))

print(all_tokenized_text)
print(all_tokenized_text[1][1])
print(all_tokenized_text[1][1][1])