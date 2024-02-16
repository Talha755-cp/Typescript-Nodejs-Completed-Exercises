// magicians.ts

// Define a function called show_magicians that takes an array of magician's names as a parameter
function show_magicians(magicians: string[]): void {
    // Loop through the array and print each magician's name
    magicians.forEach((magician) => {
        console.log(magician);
    });
}

// Define an array of magician's names
const magicianNames: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Call the show_magicians function and pass the array of magician's names
show_magicians(magicianNames);
