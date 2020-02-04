
#Importing the libraries we need
import nltk , ssl
from nltk.corpus import brown

try:
    _create_unverified_https_context = ssl._create_unverified_context
except AttributeError:
    pass
else:
    ssl._create_default_https_context = _create_unverified_https_context

#nltk.download()

with open("clipped_wings_corpus.txt","r") as corpus:
    file_content = corpus.read()
    sentences = nltk.sent_tokenize(file_content)
    print(sentences)

    num_lines = len(file_content)

    print (num_lines)

    for s in sentences:
        print(s.replace("\n"," "))

























'''Longest Sentences in each category

categories = brown.categories()
print (categories)


for index,item in enumerate(categories):
   print (f' {index}, {categories[index]},{len(brown.sents(categories=[categories[index]])}')
'''




'''TOKEN PER SENTENCE
sentences = brown.sents()
num_sentences = len(sentences)
token_count = 0

for sentence in sentences:
    for token in sentence:
        token_count += 1


average = token_count / num_sentences
print (average)
'''




