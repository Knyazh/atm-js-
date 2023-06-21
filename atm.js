let balance = 5000;
let pin = 123;

function withdraw(amount) {
  if (balance >= amount) {
      balance = balance - amount;
      showAlert(`Transaction successful. ${amount} AZN withdrawn. Current balance: ${balance} AZN`, 'alert-success');
  } else {
      showAlert("Insufficient funds in the account.", 'alert-error');
  }
}

function deposit(amount) {
  balance = balance + amount;
  showAlert(`Transaction successful. ${amount} AZN deposited. Current balance: ${balance} AZN`, 'alert-success');
}

function viewBalance() {
  showAlert(`Your balance is ${balance} AZN`, 'alert-success');
}

function resetPin() {
  let oldPin = Number(prompt("Enter your old PIN: "));
  if (pin === oldPin) {
      let newPin = Number(prompt("Enter your new PIN: "));
      pin = newPin;
      showAlert(`PIN successfully updated. Your new PIN is: ${pin}`, 'alert-success');
  } else {
      showAlert("Incorrect PIN entered.", 'alert-error');
  }
}

function showAlert(message, className) {
  const output = document.getElementById('output');
  output.textContent = message;
  output.className = `alert ${className}`;
  output.style.display = 'block';
}

document.getElementById('option').addEventListener('change', function() {
  const selectedOption = this.value;
  const amountField = document.getElementById('amount-field');
  const pinField = document.getElementById('pin-field');

  amountField.style.display = 'none';
  pinField.style.display = 'none';

  if (selectedOption === '2' || selectedOption === '3') {
    amountField.style.display = 'block';
  } else if (selectedOption === '4') {
    pinField.style.display = 'block';
  }
});

document.getElementById('submit-btn').addEventListener('click', function() {
  const selectedOption = document.getElementById('option').value;

  if (selectedOption === '1') {
    viewBalance();
  } else if (selectedOption === '2') {
    const amount = Number(document.getElementById('amount').value);
    withdraw(amount);
  } else if (selectedOption === '3') {
    const amount = Number(document.getElementById('amount').value);
    deposit(amount);
  } else if (selectedOption === '4') {
    resetPin();
  } else if (selectedOption === '5') {
    showAlert("ATM session ended.", 'alert-success');
  }
});