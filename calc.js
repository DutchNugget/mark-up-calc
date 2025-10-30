// STEP 1: Get all the HTML elements you need
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
form.appendChild(resultDisplay);



// STEP 2:calculate function
// - clear resultDisplay first for previous results 
// - Get the fixed cost and kWh for months 1, 2, and 3 total
// - Convert them to numbers using Number()
// - Check if the safeguard checkbox is checked
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

    if (kwhTotal === 0) {
        alert("Total kWh cannot be zero");
        
        return;
    }
    
    if (safeCheck.checked) {
        result *= 1.10
    } 

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

function resetCalc (event) {
    event.preventDefault();
    resultDisplay.style.display = "none"
    form.reset();
    calculate.style.display = "block";


}

// STEP 4: Calculate the markup of total 
// - If kWh is 0 or empty, set the markup to null (because you can’t divide by zero)
// - Otherwise, calculate markup = fixed cost / kWh




// STEP 7: Display the results on the page
// - Make the results div visible
// - Show each month’s markup, rounded to two decimal places
// - Show the total fixed cost, total kWh, and combined markup
// - If the safeguard option was used, show both the normal and safeguarded values


// STEP 8: Show the reset button
// - Make it visible after the calculation is complete


// STEP 9: Add an event listener to the reset button
// - Clear all the input fields
// - Uncheck the safeguard checkbox
// - Hide the results again
// - Hide the reset button again
