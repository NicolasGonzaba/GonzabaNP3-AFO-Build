const oddNum = document.getElementById("oddNum")
const oddBtn = document.getElementById("oddBtn")
const oddResponse = document.getElementById("oddResponse")

async function oddFetch() {
    if (oddNum.value == "") {
        oddResponse.innerText = "Invalid input. Please fill all avliable inputs."
        return;
    }
    const response = await fetch(`http://localhost:5270/api/OddOrEven/OddOrEven/${oddNum.value}`);
    let data = await response.text();
    console.log(data);
    oddResponse.innerText = data;
}

oddNum.addEventListener('keydown', () => {
    if (event.key === 'Enter') {
        oddFetch();
    }
})

oddBtn.addEventListener('click', () => {
    oddFetch();
})