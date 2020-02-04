const fs = require("fs")
const axios = require("axios")

function TV(){
 //Constructor function --> is there anything to put?
}

TV.prototype.findActor = function(actor){
    const URL =  "http://api.tvmaze.com/search/people?q=" + actor;
    axios.get(URL).then((response)=>{
        var actor = response.data[0]
        var actorData = [
            "Name: " + actor.person.name ,
            "Birth: " + actor.person.birthday,
            "Gender: " + actor.person.gender,
            "Country: " + actor.person.country.name,
            "URL: " + actor.person.url
        ]

        fs.appendFile("log.txt",actorData,(err)=>{
            if(err) throw err
            console.log(actorData)
        })
    })
}


TV.prototype.findShow = function(show){
    const URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;
    axios.get(URL).then((response)=>{
        const showData = [
            "Show: " + response.data.name,
            "Genre(s): " + response.data.genres.join(", "),
            "Rating: " + response.data.rating.average,
            "Network: " + response.data.network.name,
            "Summary: " + response.data.summary,
            "-".repeat(60)
          ].join("\n\n");
      
          fs.appendFile("log.txt", showData, err => {
            if (err) throw err;
            console.log(showData);
          });
    })
}

module.exports = TV