#install pymediawiki
from mediawiki import MediaWiki
import nltk



wikipedia = MediaWiki()

p = wikipedia.page("Kylie Bunbury")
content = p.content


'''
To tag Named Entities
1) Word Tokenize a Sentence
2) POS tag the tokens
3) print (nltk.ne_chunk(tagged))
'''

sentences = nltk.sent_tokenize(content)
tagged = []
# Let's go through each sentence and word tokenize it
for sent in sentences:
    # We tag each sentence (after we tokenize it; remember the input that the pos_tag() will accept is a list of tokens)
    # We add the list of tagged sentence parts in the tagged var
   tagged.append(nltk.pos_tag(nltk.word_tokenize(sent))) 

print(tagged) # A list of lists containing tagged words per sentence 

print (" ")
for tagged_sent in tagged:
    print(nltk.ne_chunk(tagged_sent))  # The ne_chunk() accepts a list of TAGGED tokens. Essentially the result of a pos_tag operation.
      # Now we input each pos tagged sentence (broken into word tokens) into the named entity identifier. 
     # What does the S stand for in the console results??

''' Understanding: 
-- The word_tokenize will accept a sentence: .word_tokenize("Hey there I'm Brina)
    and return a tokenized version if it: ["Hey","there","I'm", "Brina"]
-- The pos_tag will accept a word_tokenize result, or essentially a list of tokens: .pos_tag(["Hey","there","I'm", "Brina"])
    It will return a list of items where an item is a tuple of an item and its part of speech: [("Hey",NN), ("there",IDK)]
-- The ne_chunk will accept a pos_tag result: [("Hey",NN), ("there",IDK)]
    It will return a TREE containing its input "named identified", with the identities in parantheses and the other tagged words left alone as they are:

  (PERSON Kylie/NNP Bunbury/NNP)
  on/IN
  (ORGANIZATION IMDb/NNP Kylie/NNP Bunbury/NNP)
  on/IN
  Twitter/NNP)

'''






