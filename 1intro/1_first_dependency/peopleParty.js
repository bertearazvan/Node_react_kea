const faker = require('faker');

let students = [];


for (let i = 0; i < 10; i++) {
    students.push(faker.name.firstName() + ' ' + faker.name.lastName());
}


console.log(students)