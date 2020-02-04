var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

//Setting initial todos in localStorage
var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];
todoList.textContent = ""

/* Use submit event ==> an easier way to do this!
todoInput.addEventListener("keydown",()=>{
    if(event.key === "Enter"){
        event.preventDefault()
        todos.push(todoInput.value)
        render()
    }
})
*/

 
//Note: The submit event only works when attached to a form element
todoForm.addEventListener("click",()=>{
    alert("You submitted")
    /*
        var inputValue = todoInput.value.trim() // trim cleans up the extra space at the beginning or end of the text if there is any
        todos.push(inputValue)
        event.preventDefault()
        render()*/
})


let render = () => {
    todoList.innerHTML = ""
   for(var i=0;i < todos.length;i++){
       var new_li = document.createElement("li")
       new_li.textContent = todos[i]
       todoList.appendChild(new_li)
   }

   todoCountSpan.textContent = todos.length
}
render()


