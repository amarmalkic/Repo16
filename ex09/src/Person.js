class Person {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    getPerson() {
        var personInfo;
        return personInfo = `Name: ${this.name}, email: ${this.email}, age: ${this.age}`;

    }

}
var person = new Person("Adi", "adiilic12@gmail.com ", 24);
console.log(person.getPerson());
module.exports = Person;
