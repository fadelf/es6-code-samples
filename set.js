const mySet = new Set([
    1, 2, 3, 4, 5, 4, 3, 2, 1
]);

mySet.add(7);
mySet.delete(3);

console.log(mySet);
console.log(mySet.size);