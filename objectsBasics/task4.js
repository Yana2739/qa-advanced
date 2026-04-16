const person = {
    firstName: "Taras",
    lastName: "Shevchenko",
    age: 99
  };
  
  person.email = "taras@gmail.com";
  
  delete person.age;
  
  console.log(person);