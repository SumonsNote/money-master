document.getElementById("calculate").addEventListener("click", function () {
  const income = document.getElementById("income");
  const incomeInput = income.value;
  const incomeAmount = parseFloat(incomeInput);
  income.value = "";

  const food = document.getElementById("food");
  const foodInput = food.value;
  const foodAmount = parseFloat(foodInput);
  food.value = "";

  const rent = document.getElementById("rent");
  const rentInput = rent.value;
  const rentAmount = parseFloat(rentInput);
  rent.value = "";

  const cloth = document.getElementById("cloth");
  const clothInput = cloth.value;
  const clothAmount = parseFloat(clothInput);
  cloth.value = "";

  const totalExpenses = foodAmount + rentAmount + clothAmount;
  const balance = incomeAmount - totalExpenses;

  const expensesTotal = document.getElementById("total-expenses");
  expensesTotal.innerText = totalExpenses;

  const balanceTotal = document.getElementById("total-balance");
  balanceTotal.innerText = balance;
});

const savingId = document.getElementById("saving-id").addEventListener("click", function () {
    const saving = document.getElementById("saving-input");
    const savingInput = saving.value;
    const savingAmount = parseFloat(savingInput);
    saving.value = "";

    const balance = document.getElementById("total-balance");
    const balanceText = balance.innerText;
    const balanceTotalAmount = parseFloat(balanceText);
    const saveAmount = (balanceTotalAmount * savingAmount) / 100;

    const saveAmountMoney = document.getElementById("saving-amount");
    saveAmountMoney.innerText = saveAmount;

    const remainingBalanceTotal = document.getElementById("remain-balance");
    const remainingBalance = balanceTotalAmount - saveAmount;
    remainingBalanceTotal.innerText = remainingBalance;
  });
