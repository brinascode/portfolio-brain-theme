import requests
#Pretends that its a web browser...

import time
from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys

import selenium
# You can put a wait timer on selenium

import pytest
# Sort of like a wrapper for test functions


def testing_freelancer_signup():
    # Set up
    browser = webdriver.Firefox()  # Optional argument, if not specified will search path.
    browser.get('https://www.freelancer.com/signup?w=f')
    assert "Freelancer" in browser.title # To make sure we reached the right website
    time.sleep(10) # Let the user actually see something!

    # Capturing our elements
    username_box = browser.find_element_by_id('new-email')
    password_box = browser.find_element_by_id("new-password")

    # Inputting email and password
    username_box.send_keys("laurarandom2019@gmail.com")
    password_box.send_keys("helloworld20" + Keys.RETURN)
        # Don't worry, changed the password after this :)

    # Clicking signup button

    signup_btn = browser.find_element_by_id("signup_btn")
    actions = ActionChains(browser)
    actions.move_to_element(signup_btn).click(signup_btn)
    actions.perform()
    print("clcikedd")

    time.sleep(20)  # Let the user actually see something!
    print("30 s passed")

    # Creating a new username
    username_btn = browser.find_element_by_id("new-username")
    username_btn.send_keys("lauradoeswork2020" + Keys.RETURN)
    time.sleep(20)

    browser.quit()

testing_freelancer_signup()


def testing_freelancer_login():
    # Set up
    browser = webdriver.Firefox()  # Optional argument, if not specified will search path.
    browser.get('https://www.freelancer.com/login?w=f')
    assert "Freelancer" in browser.title # To make sure we reached the right website
    time.sleep(5) # Let the user actually see something!

    # Capturing our elements
    username_box = browser.find_element_by_id('username')
    password_box = browser.find_element_by_id("password")


    # Logging in
    username_box.send_keys("brinaaa")
    password_box.send_keys("helloworld20")
        # Don't worry, changed the password after this :)

    # Clicking button
    login_btn = browser.find_element_by_id("login_btn")
    actions = ActionChains(browser)
    actions.move_to_element(login_btn).click(login_btn)
    actions.perform()

    # Finish touches
    time.sleep(20) # Let the user actually see something!
    browser.quit()

#testing_freelancer_login()

'''Another way to submit:
   password_box.submit() --> does it really work though?? worked once then didn't
'''



