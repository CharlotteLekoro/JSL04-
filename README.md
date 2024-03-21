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

let heartRate = 95; // Current heart rate in bpm
console.log(heartRate < 100 ? "Boost needed!" : "Energy levels are high!");

let currentTemp = 4; // Current temperature in °C
console.log(currentTemp <= 5 ? "Chilled to perfection!" : "Needs a cooler!");

let currentHour = 22; // Define the current hour in 24-hour format
console.log(currentHour >= 7 && currentHour < 24 ? "Unleash the beast!" : "Better stick to water.");
