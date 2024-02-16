// magicians.ts
// Function to add "the Great" to each magician's name
export function makeGreat(magicians) {
    return magicians.map(magician => `the Great ${magician}`);
}
// Function to show magicians' names
export function showMagicians(magicians) {
    magicians.forEach(magician => console.log(magician));
}
