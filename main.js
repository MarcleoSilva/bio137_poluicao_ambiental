// Slide bars
const valueMeat = document.querySelector("#carne_value"); //output
const inputMeat = document.querySelector("#carne"); //input

valueMeat.textContent = inputMeat.value;

inputMeat.addEventListener("inputMeat", (event) => {
    valueMeat.textContent = event.target.value;
});



// Result calculation
const outputCalculation = document.querySelector("#results")
const calculationOfConsumption = ((inputMeat.value + 10) * 100) / 2

outputCalculation.textContent = calculationOfConsumption;
calculationOfConsumption.addEventListener("calculationOfConsumption", (event) => {
    outputCalculation.textContent = event.target.value;
});