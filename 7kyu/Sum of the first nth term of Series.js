/*
Task:
Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

Rules:
You need to round the answer to 2 decimal places and return it as String.
If the given value is 0 then it should return 0.00
You will only be given Natural Numbers as arguments.

Examples:
SeriesSum(1) => 1 = "1.00"
SeriesSum(2) => 1 + 1/4 = "1.25"
SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"
*/

function SeriesSum(n) {
  let sum = 0;
  let denominator = 0;

  for (let i = 1; i <= n; i++) {
    if (i == 1) {
      sum = 1;
    } else if (i == 2) {
      denominator = 4;
      sum += 1/denominator;
    } else {
      denominator += 3;
      sum += 1/denominator;
    }
  }
  
  return sum.toFixed(2).toString();
}