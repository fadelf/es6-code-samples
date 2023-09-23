let grade = 90;
let result = null;

if (grade >= 90) {
    result = "Great";
} else if (grade => 80) {
    result = "Good"
} else if (grade >= 70) {
    result = "Enough"
} else {
    result = "Bad";
}

console.log(`Your result is ${result}`);