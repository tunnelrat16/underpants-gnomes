const li1 = document.querySelector('#step-1')
const li2 = document.querySelector('#step-2')
const li3 = document.querySelector('#step-3')

function displayPlan() {
    const step1 = "Collect underpants."
    const step2 = "???"
    const step3 = "Profit!"
    li1.textContent = step1;
    li2.textContent = step2;
    li3.textContent = step3;
}