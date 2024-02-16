// great_magicians.ts
// Define an array of magicians
var magicians = ["David Copperfield", "David Blaine", "Penn & Teller", "Harry Houdini"];
// Function to modify the array by adding "the Great" to each magician's name
function make_great(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
// Function to show the list of magicians
function show_magicians(magicians) {
    console.log("List of Magicians:");
    magicians.forEach(function (magician) { return console.log(magician); });
}
// Call make_great function to modify the array
var greatMagicians = make_great(magicians);
// Call show_magicians function to display the modified array
show_magicians(greatMagicians);
