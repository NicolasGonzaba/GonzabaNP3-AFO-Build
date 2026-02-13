const guesstNum = document.getElementById("guesstNum")
const guessEasyBtn = document.getElementById("guessEasyBtn")
const guessMediumBtn = document.getElementById("guessMediumBtn")
const guessHardBtn = document.getElementById("guessHardBtn")
const guessResponse = document.getElementById("guessResponse")

let mode="EasyMode"

async function guessFetch() {
    if (guesstNum.value == "") {
        guessResponse.innerText = "Invalid input. Please fill all avliable inputs."
        return;
    }
    const response = await fetch(`http://localhost:5270/api/GreaterOrLess/${mode}/${guesstNum.value}`);
    let data = await response.text();
    console.log(data);
    guessResponse.innerText = data;
}


guessEasyBtn.addEventListener('click', () => {
    mode="EasyMode"
    guessFetch();
})
guessMediumBtn.addEventListener('click', () => {
    mode="MediumMode"
    guessFetch();
})
guessHardBtn.addEventListener('click', () => {
    mode="HardMode"
    guessFetch();
})