class Header{
    constructor(destination,templateSrc){ //maybe in the future some css  dimensions can come here
        this.destination = destination
        this.template = templateSrc
    }

    injectIntoHTML(){ 
       $(this.destination).load(this.template)
       $.get(this.template,(data)=>{
           console.log(data)
       })
    }
}

//ON DOCUMENT READY
$(function(){

    //Creating our header
    var header = new Header("#header","./templates/header.html")
    header.injectIntoHTML()
})
   
    




