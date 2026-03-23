// Функція для todo
function getTodo() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json());
  }
  
  // Функція для user
  function getUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(response => response.json());
  }
  
  // Promise.all
  Promise.all([getTodo(), getUser()])
    .then(([todo, user]) => {
      console.log("Promise.all result:");
      console.log(todo);
      console.log(user);
    })
    .catch(error => console.log(error));
  
  // Promise.race
  Promise.race([getTodo(), getUser()])
    .then(result => {
      console.log("Promise.race result:");
      console.log(result);
    })
    .catch(error => console.log(error));