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

// function reverseString(str){
//     return str.split('').reverse().join('');
// }
// const testCases= [
//     {input:"hello", expected: "olleh"},
//     {input:"world", expected: "dlrow"},
//     {input:"maria", expected: "dlrow"},
//     {input:"racecar", expected: "racecar"}

// ];
// testCases.forEach(testCase=> {
//     const result = reverseString(testCase.input);
//     if(result === testCase.expected) {
//         console.log(`test passed for input:  ${testCase.input}`);
//     }else{
//         console.error(`test failed for input : $ {testCase.input}. Expected: ${testCase.expected}, Got: ${result}`);
        
//     }
        
// });

// ამოცანა 10:
// დაწერე ფუნქცია checkVariable, რომელიც ამოწმებს არის თუ არა შემოსული ინფორმაცია,
// უნდეფაინდი ან null და დაპრინტავს
// The variable is undefined or null
// The variable is neither undefined nor null
// გადაეცით შემდეგი არგუმენტები :
// let newVariable;
// checkVariable(5);
// checkVariable('hello');
// checkVariable(null);
// checkVariable(newVariable);


// function checkVariable(variable){
//     if (variable === undefined||variable===null){
//         console.log("the variable is undefined or null");
        
//     }
// }

// let newVariable;
// checkVariable(5);
// checkVariable('hello');
// checkVariable(null);
// checkVariable(newVariable);


