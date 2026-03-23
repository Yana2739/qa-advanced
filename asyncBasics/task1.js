function delayedMessage(text, delay) {
    setTimeout(() => {
      console.log(text);
    }, delay);
  }
  
  // Виклик
  delayedMessage("Hello after 2 seconds", 2000);