//------------------Syntax : selector + action --> $(selection).action()


// ------------------Starting
$(document).ready() //all our code goes here
$(function(){
                  //other way of doing document.ready. I prefer document.ready
})

//------------------Selectors:
$("p").hide() //Selecting all elements
$(".hi").hide() //Selecting a class
$("#name").hide() //Selecting an id
$(this) //Selects current HTML element
$("*") //Selects all elements
$("p.intro")
$("p:first")
$("ul li:first") //the very first singular occurence
$("ul li:first-child") // the first child for many occurences
$("[href]") // Selects all elements with an href attribute
$("a[target='_blank']")
$("a[target != 'blank']") //THIS NOTATION WILL RETURN AN ARRAY!
var length = $("input[name='length']")[0]
$("#content").attr('id');
$(":button") //Selects all <button> elements and <input> elements of type="button"
$("tr:even") //Selects all even <tr> elements
$("tr:odd")
 //NOTE
    //querySelector is a way of using the querySelector with the native JS DOM api
    var mixed = document.querySelector("#hii")
    var mixed2 = document.querySelectorAll(".byee")
    var el = document.querySelector("div.user-panel.main input[name='login']");


//------------------jQuery events
$("p").click(function(){
    //code here
})
//Use on to attach multiple event handlers to an element:
$("p").on({
    mouseenter: function(){
      $(this).css("background-color", "lightgray");
    },
    mouseleave: function(){
      $(this).css("background-color", "lightblue");
    },
    click: function(){
      $(this).css("background-color", "yellow");
    }
  });

/* Other events:
- dbclick()
- mouseenter()
- mouseleave()
- mousedown()
- mouseup()
- hover()
- focus ()
- blur()

*/


//------------------jQuery DOM and changing the value of elements
var myDiv = $("<div>") //Create a brand new div element
myDiv.html("<p>Heeyyy</p>")
$("#receiving-element").append(myDiv)
myDiv.text("New text")
myDiv.attr("class","fancy-colors")
$("p").css("background-color");


//******************* Loading content of a file with jQuery: *******************
  $("#destination").load("./templates/hi.html") --> // Loads the content of this.template and put it (replaces) in this.destination  
  $.get("/templates/hi.html",(data)=>{    // Use this approach to store the value of data!
       console.log(data)
  })