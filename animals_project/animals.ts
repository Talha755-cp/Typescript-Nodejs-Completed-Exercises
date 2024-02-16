// animals.ts

// Define a list of animals
const animals: string[] = ["Dog", "Cat", "Rabbit"];

// Print out the name of each animal using a for loop
console.log("Names of animals:");
for (const animal of animals) {
    console.log(animal);
}

// Print a statement about each animal
console.log("\nStatements about each animal:");
for (const animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Print a statement about what these animals have in common
console.log("\nWhat these animals have in common:");
console.log("Any of these animals would make a great pet!");
