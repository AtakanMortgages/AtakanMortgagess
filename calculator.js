
function calculateMortgage() {
  const amount = parseFloat(document.getElementById('amount').value);
  const interest = parseFloat(document.getElementById('interest').value) / 100 / 12;
  const years = parseInt(document.getElementById('years').value) * 12;
  const result = document.getElementById('result');
  if (amount && interest && years) {
    const x = Math.pow(1 + interest, years);
    const monthly = (amount * x * interest) / (x - 1);
    result.innerText = `Monthly Payment: £${monthly.toFixed(2)}`;
  } else {
    result.innerText = "Please fill in all fields.";
  }
}
