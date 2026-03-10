const users = [
    { name: "Yana", email: "yana@gmail.com", age: 26 },
    { name: "Taras", email: "taras@gmail.com", age: 99 },
    { name: "Ivan", email: "ivan@gmail.com", age: 48 }
  ];
  
  for (const { name, email, age } of users) {
    console.log(name, email, age);
  }