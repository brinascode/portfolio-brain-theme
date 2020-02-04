import newspaper
import requests
from newspaper import fulltext
from textblob import TextBlob

politics_section = newspaper.build('https://www.nbcnews.com/politics',memoize_articles=False) # This returns a spider. 
usnews_section = newspaper.build('https://www.nbcnews.com/us-news', memoize_articles=False)
business_section = newspaper.build('https://www.nbcnews.com/business', memoize_articles=False)
world_section = newspaper.build('https://www.nbcnews.com/world', memoize_articles=False)
tech_section = newspaper.build('https://www.nbcnews.com/tech-media', memoize_articles=False)

# This one looks at the page that you sent and returns the links that are on the page => a way to gather urls . It's basically a wrapper for w.get() (used on mac and linux)
# Depth is specified ...
list_of_spiders = [politics_section,usnews_section,business_section,world_section,tech_section]
def check_sentiment(news_section):
      section_avg_polarity = 0
      highest = {'polarity':0,'url':""}
      lowest = {'polarity':0,'url':""}
      for article in news_section.articles: # For each seciton we go through 5 articles. # For each article that is returned to us, we go through its entire text to get the polarity 
          try:
            html = requests.get(article.url).text
            text = fulltext(html)
            tb = TextBlob(text)
            article_polarity = tb.sentiment.polarity
            if(article_polarity < lowest["polarity"]):
                  lowest["polarity"] = article_polarity
                  lowest["url"] = article.url
            elif(article_polarity > highest["polarity"]):
                  highest["polarity"] = article_polarity
                  highest["url"] = article.url
            section_avg_polarity += article_polarity
          except:
           print("error")
      section_avg_polarity = section_avg_polarity / len(news_section.articles)
      print("The average polarity for this section is " + str(section_avg_polarity))
      print("The article with the lowest polarity is :" + lowest["url"])
      print("But on a bright note")
      print("The article with the highest polarity is :" + highest["url"]) 
                   
check_sentiment(tech_section)

