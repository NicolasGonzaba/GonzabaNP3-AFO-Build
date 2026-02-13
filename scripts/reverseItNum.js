const reverseANum = document.getElementById("reverseNum")
const reverseBtn = document.getElementById("reverseBtn")
const reverseResponse = document.getElementById("reverseResponse")

async function reverseFetch() {
    if (reverseANum.value == "") {
        reverseResponse.innerText = "Invalid input. Please fill all avliable inputs."
        return;
    }
    const response = await fetch(`http://localhost:5270/api/ReverseNum/ReverseItNum/${reverseANum.value}`);
    let data = await response.text();
    console.log(data);
    reverseResponse.innerText = data;
}

reverseANum.addEventListener('keydown', () => {
    if (event.key === 'Enter') {
        reverseFetch();
    }
})

reverseBtn.addEventListener('click', () => {
    reverseFetch();
})