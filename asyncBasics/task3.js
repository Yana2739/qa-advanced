async function getTodoAsync() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return response.json();
  }
  
  async function getUserAsync() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    return response.json();
  }
  
  async function runAsyncTasks() {
    try {
      const allResults = await Promise.all([
        getTodoAsync(),
        getUserAsync()
      ]);
  
      console.log("Async/Await Promise.all:");
      console.log(allResults);
  
      const raceResult = await Promise.race([
        getTodoAsync(),
        getUserAsync()
      ]);
  
      console.log("Async/Await Promise.race:");
      console.log(raceResult);
  
    } catch (error) {
      console.log(error);
    }
  }
  
  runAsyncTasks();