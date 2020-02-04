var fruits = ["mango", "orange", "banana"];
fruits.splice(1, 0, "Lemon");

let faves = array => {
  array.map(item => console.log("This is my fave!: " + item));
};

faves(fruits);
