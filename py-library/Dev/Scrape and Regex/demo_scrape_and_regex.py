import re
import requests

facebook_page = requests.get("https://www.facebook.com/terms.php")
facebook_text = facebook_page.text

# We put all the source code in a file
with open("source_code.txt", "w") as source_code:
    source_code.write(facebook_text)


# We have another file where we put only the content we want
with open("clean_code","w") as clean_code:
    test = re.findall("(<body>)",facebook_text)
    print(test)
    clean_code.write("hi trying")


