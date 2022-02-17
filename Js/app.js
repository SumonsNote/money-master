// Function to get input from user
function getInput(inputId) {
  const inputValue = document.getElementById(inputId);
  const inputValueText = inputValue.value;
  const inputAmount = parseFloat(inputValueText);
  inputValue.value = "";
  return inputAmount;
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

  // Using of Handle calculate button with event listener
  setInputValue("total-expenses", totalExpenses);
  setInputValue("total-balance", balance);
});

// Event listene for saving section
const savingId = document.getElementById("saving-id").addEventListener("click", function () {
    // Using of Function to get input from user
    const saving = getInput('saving-input');

    const balance = document.getElementById("total-balance");
    const balanceText = balance.innerText;
    const balanceAmount = parseFloat(balanceText);

    const expensesMoney = document.getElementById('total-expenses');
    const expensesText = expensesMoney.innerText;
    const expensesAmount = parseFloat(expensesText);

    const balanceTotalAmount = balanceAmount + expensesAmount;


    const saveAmount = (balanceTotalAmount * saving) / 100;

    // Using of Handle calculate button with event listener
    setInputValue("saving-amount", saveAmount);

    const remainingBalanceTotal = document.getElementById("remain-balance");
    const remainingBalance = balanceAmount - saveAmount;
    remainingBalanceTotal.innerText = remainingBalance;
  });
