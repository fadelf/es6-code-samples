let fruits = ["Apple", "Banana", "Cherry", "Durian"];

for (const item of fruits) {
    console.log(`Fruit name is ${item}`);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < 10; i++) {
    if (numbers[i] % 2 == 0) {
        console.log(`Even number printed: ${numbers[i]}`);
    }
}