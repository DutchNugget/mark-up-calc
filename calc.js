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

const caclulate = document.getElementById("submit");
caclulate.addEventListener("click", calculateResult);

const form                  = document.getElementById("form")
const resultDisplay         = document.createElement("div")
resultDisplay.style.display = "none"
const resetForm             = document.createElement("button");
resetForm.textContent       = "reset form";
form.appendChild(resultDisplay);
resultDisplay.appendChild(resetForm);



// STEP 2:calculate function
// - Get the fixed cost and kWh for months 1, 2, and 3
// - Convert them to numbers using Number() or parseFloat()
// - Check if the safeguard checkbox is checked
function calculateResult (event) {
    event.preventDefault();
}

// STEP 4: Calculate the markup for each month
// - If kWh is 0 or empty, set the markup to null (because you can’t divide by zero)
// - Otherwise, calculate markup = fixed cost / kWh


// STEP 5: Add up the totals
// - totalFixed = the sum of all three fixed costs
// - totalKwh = the sum of all three kWh values
// - combinedMarkup = totalFixed / totalKwh (only if totalKwh is greater than 0)


// STEP 6: Check if the safeguard option is on
// - If it is, multiply each markup and the combined markup by 1.10
// - If it isn’t, just keep them as they are


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
