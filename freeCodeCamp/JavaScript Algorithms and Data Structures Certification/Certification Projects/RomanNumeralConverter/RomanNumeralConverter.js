var number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
let output = document.getElementById("output");

const stringToArray = (num) => {
    const numArray = num.value.toString().split("");
    console.log(numArray);

    return numArray;
}

const convertToRoman = (num) => {
    const array = stringToArray(num.value);
    const result = "";

    for (let i = 0; i < array.length; i++) {
        if (array[] < 4) {
            switch(result)
        }
    }

    return result;
}

convertBtn.addEventListener("click", () => {
    if (!number.value || number.value >= 1) {
        return alert("Please enter number greater than or equal to 1");
    }
    else {
        output.innerHTML = stringToArray(number);
        return output;
    }
});