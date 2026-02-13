const ballQuestion = document.getElementById("ballQuestion")
const ballBtn = document.getElementById("ballBtn")
const ballResponse = document.getElementById("ballResponse")

async function ballFetch() {
    if (ballQuestion.value == "") {
        ballResponse.innerText = "Invalid input. Please fill all avliable inputs."
        return;
    }
    const response = await fetch(`http://localhost:5270/api/Magic8Ball/Fortune/${ballQuestion.value}`);
    let data = await response.text();
    console.log(data);
    ballResponse.innerText = data;
}

ballQuestion.addEventListener('keydown', () => {
    if (event.key === 'Enter') {
        ballFetch();
    }
})

ballBtn.addEventListener('click', () => {
    ballFetch();
})