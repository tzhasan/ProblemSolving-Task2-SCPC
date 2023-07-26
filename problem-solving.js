// Task-1  Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.
function reverseKey(input) {
  let result = "";
  for (let i = input.length - 1; i >= 0; i--) {
    result = result + input[i];
  }
  return result;
}

// console.log(reverseKey("hello world"));

// **************************************************************

// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.
function sum(input) {
  if (!Array.isArray(input) || input.length === 0) {
    return "Provide valid Array";
  }
  const total = input.reduce((pre, num) => {
    if (!isNaN(num) && num >= 0) {
      pre += num;
    }
    return pre;
  }, 0);
  return total;
}

// console.log(sum([2, -5, 10, -3, 7]));

//*************************************************************** */

// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.
function mostFrequentElements(input) {
  if (!Array.isArray(input) || input.length === 0) {
    return "Provide valid Array";
  }
  const frqntObj = {};
  let mostFrqnt = 0;
  let finalElement;
  for (const ele of input) {
    frqntObj[ele] = frqntObj[ele] || 0 + 1;
    if (frqntObj[ele] > mostFrqnt) {
      mostFrqnt = frqntObj[ele];
      finalElement = ele;
    }
  }
  return finalElement;
}

// console.log(mostFrequentElements([3, 5, 2, 5, 3, 3, 1, 4, 5]));

//******************************************************************** */

// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.
const targetValue = (number, target) => {
  for (let i = 0; i < number.length - 1; i++) {
    for (let j = i + 1; j < number.length; j++) {
      if (number[i] + number[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
};

const arr = [1, 3, 6, 8, 11, 15];
const targetNumber = 9;

// console.log(targetValue(arr, targetNumber));

// ************************************************************************

// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
function calculator(num1, operator, num2) {
  if (operator == "+") {
    return num1 + num2;
  } else if (operator == "-") {
    return num1 - num2;
  } else if (operator == "*") {
    return num1 * num2;
  } else if (operator == "/") {
    if (num1 == 0 || num2 == 0) {
      return "Not possible with 0";
    }
    return num1 / num2;
  } else {
    return "Provide Valid Operator";
  }
}

// console.log(calculator(2,'*',3))

//********************************************************* */

// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
function generateRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?";
  let finalPass = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    finalPass += characters.charAt(randomIndex);
  }

  return finalPass;
}
// console.log(generateRandomString(10));

//******************************************************************* */

// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.
function romanToInt(roman) {
  const valueMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < roman.length; i++) {
    const curr = valueMap[roman[i]];
    const next = valueMap[roman[i + 1]];
    if (curr < next) {
      result += next - curr
      i++
    }
    else {
      result += curr
    }
  }
  return result;
}
// console.log(romanToInt("IXX"));

//******************************************************************* */

// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
function secondSmallestNumber(arr) {
  if (!Array.isArray(arr) || arr.length < 2) {
    return
  }
  return arr.sort((a,b)=>a-b)[1]
}

// console.log(secondSmallestNumber([21, 5, 28, 2, 8,]))