const person = {
  firstName: "Maksym",
  lastName: "Tserna",
  age: 38
};

person.email = "maksym@example.com";

delete person.age;

console.log(person);