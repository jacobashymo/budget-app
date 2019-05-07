// All numbers are per month
const bills = {
    kia: 233,
    mazda: 216,
    legal: 250,
    phone: 80,
    carInsurance: 350
};
let totalIncome = 2500;
let availableRent = totalIncome * 0.3
// let totalCost;
let totalExpenses;

function expenses() {
    let totalCost;
    totalExpenses = bills.kia + bills.mazda + bills.legal + bills.phone + bills.carInsurance + availableRent;
    totalCost = `<p>Expenses: ${totalExpenses}</p>`

    document.getElementById('numbers').innerHTML += totalCost;
};

function discretionary() {
    discretionaryIncome = totalIncome - totalExpenses;

    discretionaryHTML = `<p>Discretionary Income: $${discretionaryIncome}</p>`
    rent = `<p>Available rent money: $${availableRent}</p>`

    document.getElementById('numbers').innerHTML += discretionaryHTML;
    document.getElementById('numbers').innerHTML += rent;

}

expenses();
discretionary();