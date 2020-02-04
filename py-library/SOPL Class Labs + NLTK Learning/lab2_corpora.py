
#Importing the libraries we need


#nltk.download()


#Problem 2

'''
fileids = brown.fileids()
categories = brown.categories()
sents = brown.sents()
sents_in_categories = brown.sents(categories=categories)

print ("Categories in Corpus are: " + str(categories))
print ("Total Num of sentences in Corpus: " +  str(len(sents)))

for category in categories:
    print (category + ": " + str(len(brown.sents(categories=[category]))))

'''

#Problem 3:
word1 = "capital"
word2 = "town"
cfd = nltk.ConditionalFreqDist((target, fileid[:4])for fileid in inaugural.fileids()for w in inaugural.words(fileid)for target in [word1, word2] if w.lower().startswith(target))
cfd.plot()