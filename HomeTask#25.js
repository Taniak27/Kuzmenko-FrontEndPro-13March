class SuperMath {
  check(obj) {
    if (this.isValidOperator(obj.znak)) {
      const confirmation = confirm(`Do you want to perform the operation ${obj.znak} with ${obj.X} and ${obj.Y}?`);

      if (confirmation) {
        const result = this.calculate(obj.X, obj.Y, obj.znak);
        console.log(`Result: ${result}`);
      } else {
        this.input();
      }
    } else {
      console.log("Invalid operator. Please enter a valid mathematical operator.");
      this.input();
    }
  }

  input() {
    const X = parseFloat(prompt("Enter the value for X:"));
    const Y = parseFloat(prompt("Enter the value for Y:"));
    const znak = prompt("Enter a valid mathematical operator (+, -, /, *, %):");

    const obj = { X, Y, znak };
    this.check(obj);
  }

  isValidOperator(operator) {
    const validOperators = ["+", "-", "/", "*", "%"];
    return validOperators.includes(operator);
  }

  calculate(X, Y, operator) {
    switch (operator) {
      case "+":
        return X + Y;
      case "-":
        return X - Y;
      case "/":
        return X / Y;
      case "*":
        return X * Y;
      case "%":
        return X % Y;
      default:
        return NaN;
    }
  }
}
