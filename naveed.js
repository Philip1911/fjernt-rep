function calculateDigitSum() {
  const input = document.getElementById('numberInput').value;
  const resultDiv = document.getElementById('result');
 
  if (input === '') {
    resultDiv.textContent = 'Indtast et nummer';
    return;
  }

  let num = Math.floor(Math.abs(Number(input)));
 
  if (isNaN(num)) {
    resultDiv.textContent = 'Indtast et gyldigt nummer';
    return;
  }
 
  let sum = 0;

  if (num === 0) {
    sum = 0;
  } else {
    while (num > 0) {
      let digit = num % 10;
      sum += digit;
      num = Math.floor(num / 10);
    }
  }
 
  resultDiv.textContent = 'Sum: ' + sum;
}
