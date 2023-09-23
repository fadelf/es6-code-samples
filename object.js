/*
Create employee object
*/
const employee = {
    fullName: "Fadhel Faturrahman",
    email: "fadhelfaturrahman@gmail.com",
    job: "Software Engineer",
    address: {
        province: "DKI Jakarta",
        city: "Jakarta Timur"
    }
}

console.log(employee);

console.log(`Hello my name is ${employee.fullName}, I am working as ${employee.job}`);

// destructuring object
let {fullName} = employee;

console.log(fullName);

let {city} = employee.address;

console.log(city);