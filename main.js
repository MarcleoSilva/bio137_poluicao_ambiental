// Slide bars
// Meat
const valueMeat = document.querySelector("#carne_value"); //output
const inputMeat = document.querySelector("#carne"); //input

valueMeat.textContent = inputMeat.value;

inputMeat.addEventListener("input", (event) => {
    valueMeat.textContent = event.target.value;
});
// Fruits
const valueFrutas = document.querySelector("#frutas_value"); //output
const inputFrutas = document.querySelector("#frutas"); //input


valueFrutas.textContent = inputFrutas.value;


inputFrutas.addEventListener("input", (event) => {
    valueFrutas.textContent = event.target.value;
});


// Vegetables
const valuevegetais = document.querySelector("#vegetais_value"); //output
const inputvegetais = document.querySelector("#vegetais"); //input

valuevegetais.textContent = inputvegetais.value;

inputvegetais.addEventListener("input", (event) => {
    valuevegetais.textContent = event.target.value;
});

// Result calculation
const outputCalculation = document.querySelector(".results")
const rangeInput = document.querySelectorAll(".range_input")

// values
const porcao = {
    carne: 0.10,
    frutas: 0.08,
    veg: 0.12
};
const peso = {
    carne: 25,
    frutas: 1.05,
    veg: 1.50
};

function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}
function calcular() {
    const carne = parseInt(valueMeat.textContent);
    const frutas = parseInt(valueFrutas.textContent);
    const veg = parseInt(valuevegetais.textContent);

    return financial((carne * porcao.carne * peso.carne) + (frutas * porcao.frutas * peso.frutas) + (veg * porcao.veg * peso.veg))
}
console.log(calcular());

let calculationOfConsumption = calcular() + " kgCO₂e/semana";
outputCalculation.textContent = calculationOfConsumption;

rangeInput.forEach((element) => {


    element.addEventListener("input", e =>{

        console.log("oi");
        calculationOfConsumption = calcular() + " kgCO₂e/semana";

        outputCalculation.textContent = calculationOfConsumption;
    })
})