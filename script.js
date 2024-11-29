// const inputElement = document.getElementById('value1');
// const staticValueElement = document.getElementById('value2');
// const total = document.getElementById('total');

// inputElement.addEventListener('input', () => {
//     const inputValue = parseFloat(inputElement.value);
//     const result = inputValue * parseInt(staticValueElement.textContent);

//     if (result > 0) {
//         total.classList.remove('other');
//         total.classList.add('positive');
//     } else {
//         total.classList.remove('positive');
//         total.classList.add('other');
//     }

//     total.textContent = result;
// });
// ამოცანა 9:
// დაწერე ფუნქცია reverseString, რომელიც თავის ტანში შემოსულ სტრინგს დააბრუნებს
// საპირისპირო მიმართულებით, გამოიყენეთ reverce()

function reverseString(str){
    return str.split('').reverse().join('');
}
const testCases= [
    {input:"hello", expected: "olleh"},
    {input:"world", expected: "dlrow"},
    {input:"racecar", expected: "racecar"}

];
testCases.forEach(testCase=> {
    const
});