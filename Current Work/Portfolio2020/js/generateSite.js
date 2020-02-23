function color(templateUrl,settingsArr){
    return new Promise((resolve,reject)=>{
        var template = ""
        $.get(templateUrl,(data)=>{
            template = data
            for(var i=0;i<settingsArr.length;i++){
                var setting = settingsArr[i]
                if(setting.type === "specific"){ //If we're dealing with set words
                    setting.data.forEach((item,index)=>{
                        template = template.replace(item,`<span class='${setting.className}'>${item}</span>`)
                    })
                }else if(setting.type === "regex"){
                    //We find all the matches for our regex, then we loop to replace each of them
                    var matches = template.match(setting.regex)
                    matches.forEach((match,index)=>{
                        template = template.replace(match,`<span class='${setting.className}'> ${match} </span>`)
                    })  
                }
            } 
            console.log(template)
            resolve(template)
        })
    })
}

class Header{
    constructor(){
    }
    async createConsole(){
        var settingsArr = [
            {
                type:"specific",
                name:"determiners",
                data:["var","let","const"],
                className:"det" 
            },
            {
                type:"specific",
                name:"symbols",
                data:["+",".","{","}"],
                className:"text" 
            },
            {
                type:"regex",
                name:"properties",
                regex:/.*\:/igm,
                className:"prop"
            },
            {
                type:"regex",
                name:"strings",
                regex:/".*"/igm, 
                className:"str"
            }
        ]
        var consoleHtml = await color("./templates/console.html",settingsArr)
        $("#console").html(consoleHtml)
    }
}



//JjQuery starts here:
$(function(){
    //We create the header
   var header = new Header()
   header.createConsole()
   
})
   
    




//OLD

// class Header{
//     constructor(htmlDestination,templateSrc){ //maybe in the future some css  dimensions can come here
//         this.htmlDestination = htmlDestination
//         this.template = templateSrc
//     }

    // injectIntoHTML(){ 
    //     $(this.htmlDestination).load(this.template)
    //  }
 
// createConsoleOld(){
//     var html = ct("var","var") + ct("user","var") + ct("= {","txt") + "</br>" + ct("username","prop") + ct(": brinascode","str")
//     }

// function ct(text,type){  //ct stands for create tag
//     var result = ""
//     switch(type){
//         case "text":
//             result = `<span class='txt'>${text}</span>`
//             break;
//         case "det":
//             result =  `<span class='det'>${text}</span>`
//             break;
//         case "str":
//             result = `<span class='str'>${text}</span>`
//             break;
//         case "prop":
//             result = `<span class='prop'>${text}</span>`
//             break;
//         case "num":
//             result = `<span class='num'>${text}</span>`
//             break;
//         case "obj":
//              result = `<span class='obj'>${text}</span>`
//              break;
//         case "met":
//             result = `<span class='met'>${text}</span>`
//             break;
//         case "var":
//             result = `<span class='var'>${text}</span>`
//             break;
//     }
//    return result
// }
