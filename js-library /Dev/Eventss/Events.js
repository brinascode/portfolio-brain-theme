/* To prevent default action of events, use e.preventDefault()
Explain that if a button inside a <form> element is clicked, the information in all texts fields within the page is cleared out. 
This is default behavior that the browser enforces with all buttons within the form.
• Ask the students why this may be a problem.
○ We may want to retain that information on the page after the form has been submitted.
○ We could have other buttons within the form that should not submit the results.
*/

//Prevent default example
var submitEl = document.createElement("button")
submitEl.id = "submit-btn"
document.getElementsByTagName("body")[0].appendChild(submitEl)
submitEl = document.getElementById("submit-btn")

submitEl.addEventListener("click", function(event) {
    event.preventDefault();
  
    console.log(event);
    
    var response = "Thank you for your submission " + nameInput.value + "! We will reach out to you at " + emailInput.value + ".";
    submissionResponseEl.textContent = response;
  });