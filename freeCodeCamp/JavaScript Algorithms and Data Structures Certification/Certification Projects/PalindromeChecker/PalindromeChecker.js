const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
let result = document.getElementById("result");

result.innerHTML = "Enter some text to see if it is a palindrome!"

const removeChars = (str) => {
    let toString = str.toString().toLowerCase();
    let joinedStr = toString.replace(/ /g, "");
    return joinedStr.trim().replace(/[^A-Za-z0-9\s]/g, "");
}

const reverseText = (str) => {
    const resultText = str.split("").reverse();
    return resultText.join("");
}

const checkForPalindrome = (str) => {
    const removedChars = removeChars(str.value);
    const reversedText = reverseText(removedChars);

    if (reversedText === removedChars) {
        return `${str.value} is a palindrome.`;
    }

    else {
        return `${str.value} is not a palindrome.`;
    }

}

checkBtn.addEventListener("click", () => {
    if (!textInput.value) {
        return alert("Please input a value");
    }
    else {
        result.innerHTML = checkForPalindrome(textInput);
        return result;
    }
});