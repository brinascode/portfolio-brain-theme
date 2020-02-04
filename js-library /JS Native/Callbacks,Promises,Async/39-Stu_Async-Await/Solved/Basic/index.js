const fs = require("fs");
const util = require("util");

//Explain why we need to do this: if there are no promises, then there are no async/awaits
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

//We ALWAYS need the async keyword when dealing with async/await functions
async function combineAnimals() {
  try {
    const hamster = await readFileAsync("hamster.json", "utf8");
    const dog = await readFileAsync("dog.json", "utf8");
    const cat = await readFileAsync("cat.json", "utf8");
    const goldfish = await readFileAsync("goldfish.json", "utf8");

    const animalJSON = [hamster, dog, cat, goldfish].map(JSON.parse);

    await writeFileAsync(
      "combined.json",
      JSON.stringify(animalJSON, null, 2),
      "utf8"
    );

    console.log("Successfully wrote to 'combined.json' file");
  } catch (err) {
    console.log(err);
  }
}

combineAnimals();
