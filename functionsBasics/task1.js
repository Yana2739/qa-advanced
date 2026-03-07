// 1️⃣ Function Declaration
function calculateAreaDeclaration(width, height) {
    return width * height;
  }
  
  const result1 = calculateAreaDeclaration(5, 10);
  console.log("Declaration result:", result1);
  
  // 2️⃣ Function Expression
  const calculateAreaExpression = function (width, height) {
    return width * height;
  };
  
  const result2 = calculateAreaExpression(5, 10);
  console.log("Expression result:", result2);
  
  // 3️⃣ Arrow Function
  const calculateAreaArrow = (width, height) => width * height;
  
  const result3 = calculateAreaArrow(5, 10);
  console.log("Arrow result:", result3);