// Addition
function add(a, b) {
    return a + b;
}

console.log(add(5,4))
  
  // Subtraction
  function subtract(a, b) {
    return a - b;
}

console.log(subtract(10,15));
  
  // Multiplication
  function multiply(a, b) {
    return a * b;
  }

console.log(multiply(31,40));
  
  // Division
  function divide(a, b) {
    if (b === 0) {
      return "Cannot divide by zero";
    }
    return a / b;
  }

  console.log(divide(5,0));