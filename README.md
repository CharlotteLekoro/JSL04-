# JSL04-

let userPreference = 'Sugar-free'; // Possible values: 'Regular', 'Sugar-free', or undefined

if (userPreference === 'Sugar-free') {
    console.log("The user prefers Sugar-free variety.");
} else if (userPreference === 'Regular') {
    console.log("The user prefers Regular variety.");
} else {
    console.log("The preference is not set, defaulting to Regular variety.");
}

let cansLeft = 3; // Any number of cans
console.log(cansLeft < 5 ? "Time to restock!" : "We're stocked!");
