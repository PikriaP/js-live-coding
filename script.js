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

// ამოცანა 1:
// მოცემული გაქვს HTML & css კოდი
// <input id="value1" type="text" value="" /> x <span id="value2">1234</span> = <span id="total"
// class="other">?</span>
// ..........
// .positive { color: green; }
// .other { color: red; }
// დაწერეთ ჯავასკრიპტის კოდი, რომელიც ინფუთში ჩაწერილ მნიშვნელობას გადაამრავლებს
// 1234-ზე, რომელიც სტატიკურად ისედაც გაწერილია და ტოლობის მერე გამოაჩინეთ შედეგი.
// თუ შედეგი დადებითი რიცხვი იქნება მწვანედ გამოაჩინეთ რიცხვი, ხოლო თუ ნული ან
// ნულზე ნაკლები იქნება წითლად.

// const value1Input = document.getElementById('value1');
// const value2 = document.getElementById('value2').textContent;
// const total = document.getElementById('total');

// value1Input.addEventListener('input' , () => {
//     const value1=parseFloat(value1Input.value);
//     const result = value1 * value2;
//     total.textContent=result;

//     if(result>0){
//         total.classList.remove('other');
//         total.classList.add('positive');
//     }else{
//         total.classList.remove('positive');
//         total.classList.add('other');
//     }
// });

// ამოცანა 2:
// დაწერეთ რიცხვები და გამოიტანეთ მაქსიმალური და მინიმალური სიდიდის რიცხვები.
// function findMaxMin(arr) {
//     const max = Math.max(...arr);
//     const min = Math.min(...arr);
// console.log(`Max: ${max}, Min: ${min}`);
// }



// findMaxMin([20, 25, 13, 2, 7]);

// ამოცანა 3.
// დაწერეთ კოდი, რომელიც მომხარებელს დააწერინებს სიტყვას და თქვენ ამ მნიშნველობას
// შეამოწმებთ პალინდრომი არის თუ არა.

// let word = prompt("please enter the  word to check: " );
// function checkPalindrome(str) {
//     const reversed = str.split(''). reverse(). join('');
//     if(str === reversed){

   
//     console.log("it's a palindrome!");
//      }else{
//         console.log("it's not a palindrome");
        
//      }
// }
// checkPalindrome(word);
// function isPalindrome (str){
//     const length = str.length;
//     for(let i=0; i<length /2; i++){
//         if (str[i]!== str[length-i-1]){
//             return false;
//         }
//     }
//     return true;
// }

// const word = prompt('please enter a word: ');
// if (isPalindrome(word)){
//     console.log(`${word} is a palindrome!`);
// }else{
//     console.log(` ${word} is not a palindrome`);
      
// }

// ამოაცანა 4.
// დაწერეთ ჯავასკრიპტის კოდი რომელიც საპირისპირო მიმართულებით დააყენებს სტრინგის
// მნიშნველობებს.
// function reverseString (str) {
//     return str.split('').reverse().join('');
// }
// console.log(reverseString("happy holiday"));
// version 2.
function reverseString(str){
    let reversed ="";
    for(let i= str.length-1; i>=0; i--){
        reversed+=str[i];
    }
    return reversed;
}
const string = 'happy holiday';
const reversedString=reverseString(string);
console.log(reversedString);
