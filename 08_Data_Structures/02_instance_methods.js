class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
    }
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
}

let firstStudent = new Student("Abhishek", "Champ", 2022);

console.log(firstStudent.firstName);
console.log(firstStudent.lastName);
console.log(firstStudent.grade);
console.log(firstStudent.fullName());
