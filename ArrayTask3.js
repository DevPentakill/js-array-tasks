// ### 3. Checking Array Membership with ‘includes’

// **Instructions:**

// 1. Create an array of books containing different book.

// 2. Use the includes method to check if the array contains a javascript book.

// 3. Print a message to the console indicating whether the element is present in the array or not.

let libraryMem = ['poe', 'bank math', 'mafs', 'GFI', 'Think Clearly', 'Ikigai'];

console.log(libraryMem);
let checkBook = 'poe';

let police = libraryMem.includes(checkBook);
console.log(police); // Returns Boolean

if (police) {
    console.log("Bingo, Grab em!");
} else {
    console.log("Call Police!");
}