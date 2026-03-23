class TodoService {
    async getTodo() {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      return response.json();
    }
  }
  
  class UserService {
    async getUser() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
      return response.json();
    }
  }
  
  async function run() {
    const todoService = new TodoService();
    const userService = new UserService();
  
    const todo = await todoService.getTodo();
    const user = await userService.getUser();
  
    console.log(todo);
    console.log(user);
  }
  
  run();