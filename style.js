let increaseCount = document.querySelector(".count");

let plusBtn = document.querySelector(".plus");
let minusBtn = document.querySelector(".minus")

let input = document.querySelector("input");
let resetBtn = document.querySelector(".resetBtn");

plusBtn.addEventListener("click", () => {
    let countValus = parseInt(increaseCount.innerText);

    increaseCount.innerText = countValus + 1;

    let inputNum = parseInt(input.value);

    increaseCount.innerText = countValus + inputNum;
})
minusBtn.addEventListener("click", () => {
    let countValus = parseInt(increaseCount.innerText);

    increaseCount.innerText = countValus - 1;
    let inputNum = parseInt(input.value);

    increaseCount.innerText = countValus - inputNum;
});


resetBtn.addEventListener('click', () => {
    input.value = "";
    increaseCount.innerText = "0";
})






// let i = 0;

// let count = 0;

// plusBtn.addEventListener("click", () => {
//     increaseCount.innerText = i;
//     let inputValuesStr = Math.floor(input.value)
//     let count = inputValuesStr + inputValuesStr;
//     increaseCount.innerText = count;
//     i++;

// })
// minusBtn.addEventListener("click", () => {
//     i--;
//     increaseCount.innerText = i;
// })