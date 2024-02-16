// great_magicians.ts

// Define an array of magicians
const magicians: string[] = ["David Copperfield", "David Blaine", "Penn & Teller", "Harry Houdini"];

// Function to modify the array by adding "the Great" to each magician's name
function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

// Function to show the list of magicians
function show_magicians(magicians: string[]): void {
    console.log("List of Magicians:");
    magicians.forEach(magician => console.log(magician));
}

// Call make_great function to modify the array
const greatMagicians: string[] = make_great(magicians);

// Call show_magicians function to display the modified array
show_magicians(greatMagicians);
