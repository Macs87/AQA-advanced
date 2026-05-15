const users = [
  {
    name: "Maksym",
    email: "maksym@example.com",
    age: 38
  },
  {
    name: "Anna",
    email: "anna@example.com",
    age: 25
  },
  {
    name: "John",
    email: "john@example.com",
    age: 30
  }
];

for (const { name, email, age } of users) {
    console.log(name, email, age);
}