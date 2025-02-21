// https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/
function areBalancedBrackets(expr) {
  // stack for brackets expressions
  let stack = [];
  // iterating through expressions
  for (let i = 0; i < expr.length; i++) {
    let x = expr[i];

    // push opening brackets
    if (x == "(" || x == "[" || x == "{") {
      stack.push(x);
      continue;
    }

    if (stack.length === 0) {
      return false;
    }

    // now check if x is closing brackets and if it is true then pop matching opening brackets
    let check;
    switch (x) {
      case ")":
        check = stack.pop();
        if (check == "{" || check == "[") {
          return false;
        }
        break;
      case "}":
        check = stack.pop();
        if (check == "(" || check == "[") {
          return false;
        }
        break;
      case "]":
        check = stack.pop();
        if (check == "{" || check == "(") {
          return false;
        }
        break;
    }
  }
  return stack.length == 0;
}

console.log(areBalancedBrackets("([{}])"));
