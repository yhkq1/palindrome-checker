const checkButton = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const resultText = document.getElementById('result');


function cleanInput(str) {
    return str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
}

checkButton.addEventListener("click", function() {
    const inputValue = textInput.value;


    if (inputValue === "") {
        alert("Please input a value");
        return;
    }


    const cleanedInput = cleanInput(inputValue);
    const reversedInput = cleanedInput.split('').reverse().join('');
    

    if (cleanedInput === reversedInput) {
        resultText.innerText = `${inputValue} is a palindrome.`;
    } else {
        resultText.innerText = `${inputValue} is not a palindrome.`;
    }
});
