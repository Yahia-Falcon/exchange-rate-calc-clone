//api password: abc123 

const currencyElementOne = document.getElementById("currency-1");
const amountElementOne = document.getElementById("amount-1");
const currencyElementTwo = document.getElementById("currency-2");
const amountElementTwo = document.getElementById("amount-2");

const rateElement = document.getElementById("rate");
const swap = document.getElementById("swap");

function calculate() {
 const key = "fdfa1455ff611938c11d2cc3";
 const currencyOne = currencyElementOne.value;
 const currencyTwo = currencyElementTwo.value;

 fetch(`https://v6.exchangerate-api.com/v6/${key}/latest/${currencyOne}`)
  .then(res => res.json())
  .then(data => {
   const rate = data.conversion_rates[currencyTwo];
   
   rateElement.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;
   amountElementTwo.value = (amountElementOne.value * rate).toFixed(2);
  });
}

currencyElementOne.addEventListener("change", calculate);
amountElementOne.addEventListener("input", calculate);
currencyElementTwo.addEventListener("change", calculate);
amountElementTwo.addEventListener("input", calculate);

swap.addEventListener("click", () => {
 const temp = currencyElementOne.value;

 currencyElementOne.value = currencyElementTwo.value;
 currencyElementTwo.value = temp;

 calculate();
});

calculate();