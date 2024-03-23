// # [JSL04] Submission: Monster Ternary Operator


let userPreference = 'Undefined'; // Possible values: 'Regular', 'Sugar-free', or undefined

if (userPreference === 'Sugar-free') {
    console.log("The user prefers Sugar-free variety.");
} else if (userPreference === 'Regular') {
    console.log("The user prefers Regular variety.");
} else {
    console.log("The preference is not set, defaulting to Regular variety.");
}


let cansLeft = 1; // Any number of cans
console.log(cansLeft < 5 ? "Time to restock!" : "We're stocked!");


let heartRate = 10; // Current heart rate in bpm
console.log(heartRate < 100 ? "Boost needed!" : "Energy levels are high!");


let currentTemp = 10; // Current temperature in °C
console.log(currentTemp <= 5 ? "Chilled to perfection!" : "Needs a cooler!");


let currentHour = 2;  // Define the current hour in 24-hour format
console.log(currentHour >= 7 && currentHour < 24 ? "Unleash the beast!" : "Better stick to water.");





