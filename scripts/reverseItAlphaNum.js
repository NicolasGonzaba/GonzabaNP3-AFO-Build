const reverseNum = document.getElementById("reverseNum")
const reverseBtn = document.getElementById("reverseBtn")
const reverseResponse = document.getElementById("reverseResponse")

async function reverseFetch() {
    if (reverseNum.value == "") {
        reverseResponse.innerText = "Invalid input. Please fill all avliable inputs."
        return;
    }
    const response = await fetch(`http://localhost:5270/api/ReverseAlphaNum/ReverseAlphaNum/${reverseNum.value}`);
    let data = await response.text();
    console.log(data);
    reverseResponse.innerText = data;
}

reverseNum.addEventListener('keydown', () => {
    if (event.key === 'Enter') {
        reverseFetch();
    }
})

reverseBtn.addEventListener('click', () => {
    reverseFetch();
})