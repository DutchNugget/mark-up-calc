// Get all the HTML elements you need
// - Get each month's fixed cost input
// - Get each month's kWh input
// - Get the safeguard checkbox
// - Get the calculate button
// - Create a <div> in JavaScript to display the results
// - Create a reset button and keep it hidden at first

const fixed1 = document.getElementById("fixed1");
const fixed2 = document.getElementById("fixed2");
const fixed3 = document.getElementById("fixed3");

const kwh1 = document.getElementById("kwh1");
const kwh2 = document.getElementById("kwh2");
const kwh3 = document.getElementById("kwh3");

const safeCheck = document.getElementById("guardCheck");

const calculate = document.getElementById("submit");
calculate.addEventListener("click", calculateResult);

const form                  = document.getElementById("form");
const resultDisplay         = document.createElement("div");
resultDisplay.style.display = "none" ;
resultDisplay.id = "resultDisplay";
form.appendChild(resultDisplay);



// Calculate function
// - clear resultDisplay first for previous results 
// - Get the fixed cost and kWh for months 1, 2, and 3 total
// - Convert them to numbers using Number()
// - Calculate markup by totalfix / kwh 
function calculateResult (event) {
    event.preventDefault();

    while (resultDisplay.firstChild) {
        resultDisplay.removeChild(resultDisplay.firstChild)
    }

    calculate.style.display = "none"
    const fixedTotal = Number(fixed1.value) + Number(fixed2.value) + Number(fixed3.value);
    const kwhTotal   = Number(kwh1.value)   + Number(kwh2.value)   + Number(kwh3.value);
    let result     = fixedTotal / kwhTotal

// reset form if kwh or cost total = 0
    if (kwhTotal === 0 && fixedTotal === 0) {
        alert("Cannot be zero");
        resetCalc()
        return;
    }
    
// - Check if the safeguard checkbox is checked
    if (safeCheck.checked) {
        result *= 1.10
    } 
// - make resultDisplay visible and append resetform 
    resultDisplay.style.display = "block"
    const markUp = document.createElement("p")
    markUp.textContent = `Suggested markup is ${result.toFixed(2)} kroner`
    resultDisplay.appendChild(markUp)
    
    const resetForm             =  document.createElement("button");
    resetForm.textContent       = "reset form";
    resetForm.classList.add("reset-btn");
    
    resultDisplay.appendChild(resetForm);

    resetForm.addEventListener("click", resetCalc)

}

// - form reset button 
function resetCalc (event) {
    if (event) event.preventDefault();
    resultDisplay.style.display = "none"
    form.reset();
    calculate.style.display = "block";


}



