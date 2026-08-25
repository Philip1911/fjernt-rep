function calculateDigitSum() {
  const input = document.getElementById('numberInput').value;
  const resultDiv = document.getElementById('result');
 
  if (input === '') {
    resultDiv.textContent = 'Please enter a number.';
    return;
  }
 
  // Work with the absolute value in case of negative numbers,
  // and use Math.floor in case a decimal sneaks in.
  let num = Math.floor(Math.abs(Number(input)));
 
  if (isNaN(num)) {
    resultDiv.textContent = 'Please enter a valid number.';
    return;
  }
 
  let sum = 0;
 
  // Edge case: if the number is 0, the loop below won't run,
  // so handle it directly.
  if (num === 0) {
    sum = 0;
  } else {
    while (num > 0) {
      let digit = num % 10;   // get the last digit
      sum += digit;           // add it to the running total
      num = Math.floor(num / 10); // remove the last digit
    }
  }
 
  resultDiv.textContent = 'Sum of digits: ' + sum;
}
