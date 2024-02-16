// magicians.ts

// Function to add "the Great" to each magician's name
export function makeGreat(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

// Function to show magicians' names
export function showMagicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}
