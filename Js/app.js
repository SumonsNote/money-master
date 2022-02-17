// Function to get input from user
function getInput(inputId) {
  const inputValue = document.getElementById(inputId);
  const inputValueText = inputValue.value;
  const inputAmount = parseFloat(inputValueText);
  inputValue.value = "";
  return inputAmount;
}

// Function for innerText
function getInnerTextValue(innerTextValue) {
  const innerValue = document.getElementById(innerTextValue);
  const innerText = innerValue.innerText;
  const innerTextAmount = parseFloat(innerText);
  return innerTextAmount;
}

// Function to set value from input
function setInputValue(inputValueSet, money) {
  const setValue = document.getElementById(inputValueSet);
  setValue.innerText = money;
}

// Handle calculate button with event listener
document.getElementById("calculate").addEventListener("click", function () {
  // Using of Function to get input from user
  const income = getInput("income");
  const food = getInput("food");
  const rent = getInput("rent");
  const cloth = getInput("cloth");

  const totalExpenses = food + rent + cloth;
  const balance = income - totalExpenses;

  // Error handle for income amount
  if (income < totalExpenses) {
    alert('Your income is less than expenses');
  }

  // Using of Handle calculate button with event listener
  setInputValue("total-expenses", totalExpenses);
  setInputValue("total-balance", balance);
});

// Event listene for saving section
  const savingId = document.getElementById("saving-id").addEventListener("click", function () {
    // Using of Function to get input from user
    const saving = getInput("saving-input");

    // Using of Function for innerText
    const balanceAmount = getInnerTextValue("total-balance");
    const expensesAmount = getInnerTextValue("total-expenses");

    const balanceTotalAmount = balanceAmount + expensesAmount;
    const saveAmount = (balanceTotalAmount * saving) / 100;

    // Using of Handle calculate button with event listener
    setInputValue("saving-amount", saveAmount);

    const remainingBalanceTotal = document.getElementById("remain-balance");
    const remainingBalance = balanceAmount - saveAmount;
    remainingBalanceTotal.innerText = remainingBalance;

    // Error handle for saving amount
    if (saveAmount > balanceAmount) {
      alert('Saving amount is more than balance');
    }
  });
