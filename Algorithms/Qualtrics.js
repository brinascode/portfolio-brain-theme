// Sample questions
// A couple of representative examples of coding problems are the clock hands and is scrambled palindrome problems detailed below
// Clock hands
// Write a function that returns the acute angle between two clock hands, with two integers for the number of hours and number of minutes.
// E.g. For 3:00, the acute angle would be 90°. For 6:00, it would be 180°.
// Is Scrambled Palindrome
// Write a function that, given a string of letters, returns true or false for whether the letters in the string could be arranged to form a palindrome.
// E.g. For “torro”, the answer is True, because the letters can be rearranged to spell “rotor”.



function acuteAngle(time){
    var angle = 30
    if(time.length === 4){ //Formatting
        time = "0"+time
    }
    var hours = time.substring(0,2)
    var minutes = time.substring(3,5)

    console.log(hours)
    console.log(minutes)
}

//acuteAngle("5:00")


function isPalindrome(word){
    var checks = 0
    for(var i=0;i<word.length;i++){
        console.log(word[i])
        console.log(word[word.length-(i+1)])
        console.log("done")
        if(word[i] === word[word.length-(i+1)]){
            checks++
        }
    }
    if(checks === word.length){
        return true
    }else{
        return false
    }
}
//console.log(isPalindrome("hannah"))

function sockMerchant(n,ar){
    var pairs = 0
    var checked = []
    var allMatches = []
    ar.map((item,index)=>{ //We loop through all the array items
        //We find an item and check if it has matches. But we only check the numbers that haven't been checked yet.
        if(!checked.includes(item)){
         var matches = ar.filter((match)=>{return match === item })
         checked.push(item)
         allMatches.push(matches)
        }

    })

    for(var i=0;i<checked.length;i++){
        if(allMatches[i]){
            if(!allMatches[i][1]){ //We remove single occurrences
                allMatches.splice(i,1)
            }else{ //and we count the pairs
                pairs += Math.floor(allMatches[i].length /2)
            }
        }
        
    }

    console.log(checked)
    console.log(allMatches)
    return pairs
}

//console.log(sockMerchant(7,[1,2,1,2,1,3,2]))


function countingValleys(n,s){
    var valleys = 0
    var initialStringLen = s.length
    if( n<2 || n>10**6){
        return new Error("Outside of bounds")
    }
    for(var i=0;i<initialStringLen;i++){
        if(s.search(/DD.*?U/) !== -1){
            console.log("Match!")
            valleys++
           s =  s.replace(/DD.*?U/,"")  
           console.log(s) 
        }
    }   
    
    console.log(valleys)
}
countingValleys(5,"DUDDDUUDUU")