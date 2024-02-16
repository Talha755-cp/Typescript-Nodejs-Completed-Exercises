// alien_colors.ts

// Function to simulate shooting an alien with a given color
function shootAlien(alienColor: string) {
    if (alienColor === 'green') {
        console.log("You just earned 5 points for shooting the green alien.");
    } else {
        console.log("You just earned 10 points.");
    }
}

// Test the function with different alien colors
shootAlien('green'); // This should print "You just earned 5 points for shooting the green alien."
shootAlien('red');   // This should print "You just earned 10 points."
