import nltk


# This method expects a list. So if you give it a string, it considers a list of letters.
results = nltk.pos_tag("The cat in the Hat")
print (results)

# What we need to give it is a list of tokens. Like this: (["hi","these","are","tokens"]), and it will tag each token
# So in order for the Part of Speech tagger to work the way it's actually supposed to, we must input a list of tokens that are already tagged.
# Since our tokenizer returns a list of tokens, we can input that list in the pos_tag()

words = nltk.word_tokenize("The cat in the bag")
results2 = nltk.pos_tag(words) 
print (results2) # Should print correctly

words2 = nltk.word_tokenize("Don't bat your eyes")
results3 = nltk.pos_tag(words2)
print (results3)# Should print correctly