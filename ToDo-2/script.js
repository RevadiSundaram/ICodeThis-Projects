const inputValueEl = document.getElementById('inputValue');
const submitBtn = document.getElementById('submit');
const checkboxIpEl = document.getElementById('checkboxInput')

submitBtn.addEventListener('click', function() {
    const checkboxValue = checkboxIpEl.value;
    checkboxIpEl.textContent = checkboxValue;
    console.log(checkboxIpEl.textContent);
});