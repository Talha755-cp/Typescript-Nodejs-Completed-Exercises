// app.ts

import { makeGreat, showMagicians } from './magicians';

// Original array of magician names
const originalMagicians: string[] = ['David Copperfield', 'Harry Houdini', 'Penn Jillette'];

// Call makeGreat function with a copy of the array
const greatMagicians: string[] = makeGreat([...originalMagicians]);

// Show original magicians' names
console.log('Original Magicians:');
showMagicians(originalMagicians);

// Show great magicians' names
console.log('\nGreat Magicians:');
showMagicians(greatMagicians);
