// alien_colors.ts

// Define the color of the alien
const alienColor: string = "green";

// Check the color of the alien and print points accordingly
if (alienColor === "green") {
    console.log("Player earned 5 points.");
} else if (alienColor === "yellow") {
    console.log("Player earned 10 points.");
} else if (alienColor === "red") {
    console.log("Player earned 15 points.");
} else {
    console.log("Invalid alien color.");
}
