import nltk
from nltk.corpus import brown

brown_tagged_sents = brown.tagged_sents(categories='news') # Returns a list of words and their POS. Raw data
print(brown_tagged_sents)
size = int(len(brown_tagged_sents) * 0.9) # We only train with 90% of the data so that we can test with the remaining 10.

train_sents = brown_tagged_sents[:size]
test_sents = brown_tagged_sents[size:]

#train the tagger
unigram_tagger = nltk.UnigramTagger(train_sents) # We are training a model that will learn from the tagged data and be able to tag new things

#calculate the accuracy
print("Results on test set using first unigram tagger:  {0}".format(unigram_tagger.evaluate(train_sents))) # Should return a higher accuracy score (the result), because you're evaluating it based on what it was trained on
print("Results on test set using first unigram tagger: {0}".format(unigram_tagger.evaluate(test_sents)))

'''

#1) Why is the training accuracy higher than the testing accuracy?
    Because the tagger was trained with the same words that were used in the evaluation.
    
#2) Why is the training accuracy not perfect (100%)
    Because there are some words that model could not tag perfectly or recognize because the original data was imperfect.
'''

def_tagger= nltk.DefaultTagger("NN")
uni_tagger=  nltk.UnigramTagger(train_sents, backoff=def_tagger) # We are training a new model but this time using a backoff

print("Results on test set using the second unitagger (with backoff enabbled): {0}".format(uni_tagger.evaluate(train_sents)))
print("Results on test set using the second unitagger (with backoff enabled): {0}".format(uni_tagger.evaluate(test_sents)))
'''


#3 Why does the accuracy score on the training data not go up but it does on the test data?
    Because we now have a backoff which means that the tagger will use an alternative tagging mechanism if it doesn't
     know a POS. It will use the backoff tagger as a secondary tagger if it encounters something it doesn't know. So since our backoff tagger knows how to tag nouns, it is a good backoff
     to this current tagger because nouns are usually unigrams anyway. So if the main tagger doesn't know what a unigram is, there is a high chance it is a noun, which the backoff tagger can indentify correctly.
      and just tag it as a noun. It therefore increases its chances of correctly tagging a noun. 


#4 Create two new taggers, A BigramTagger that has not backoff and a BigramTagger that user a unigram tagger as backoff. Report the accuracies. Why is one so much lower than the other?
    Because with a bigram tagger comes more scarcity --> a lower probability of finding particular words in a specific sequence. 
    The second tagger has a much higher accuracy because it has a backoff tagger that will tag the words as unigrams if the tagger was not able to detect the tags using bigram tagging.

#5 Repeat #4 with a TrigramTagger using a Bigramtagger as backoff
'''

bi_tagger = nltk.BigramTagger(train_sents)
print ("Results on test set using first bigram tagger (no backoff): {0}".format(bi_tagger.evaluate(test_sents)))
bi_tagger2 = nltk.BigramTagger(train_sents, backoff=uni_tagger )
print ("Results on test set using second bigram tagger (with backoff) {0}".format(bi_tagger2.evaluate(test_sents)))


tri_tagger = nltk.TrigramTagger(train_sents)
print ("Results on test set using first trigram tagger (no backoff): {0}".format(tri_tagger.evaluate(test_sents)))
tri_tagger2 = nltk.TrigramTagger(train_sents, backoff=bi_tagger)
print("Results on test set using second trigram tagger (with backoff): {0}".format(tri_tagger2.evaluate(test_sents)))

'''
My notes:
So we have the following kinds of taggers in nltk:
- unitagger
- bigramtagger
- trigram tagger
'''