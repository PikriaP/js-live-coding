const inputElement = document.getElementById('value1');
const staticValueElement = document.getElementById('value2');
const total = document.getElementById('total');

inputElement.addEventListener('input', () => {
    const inputValue = parseFloat(inputElement.value);
    const result = inputValue * parseInt(staticValueElement.textContent);

    if (result > 0) {
        total.classList.remove('other');
        total.classList.add('positive');
    } else {
        total.classList.remove('positive');
        total.classList.add('other');
    }

    total.textContent = result;
});