var dog = {
raining:true,
noise:"Woof",
makeNoise:function(){
        if(this.raining){
            console.log(this.noise)
        }
    }
}

var cat = {
    raining:true,
    noise:"Meow!",
    makeNoise:function(){
        if(this.raining){
            console.log(this.noise)
        }
    }
}

function massHysteria(dog,cat){
    if(dog.raining && cat.raining){
        console.log("DOGS AND CATS LIVING TOGETHER ! MASS HYSTERIA")
    }
}

cat.makeNoise()
massHysteria(dog,cat)

//Intro to next lesson:
/*
As you can see, we are repeating some code. What if we could create the basic structure of the animals and then create them/instantiate it anytime we need a new animal??
--> we can use constructor functions for that!
*/