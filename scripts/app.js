const helloName = document.getElementById("helloName")
const helloBtn = document.getElementById("helloBtn")
const helloResponse = document.getElementById("helloResponse")

async function helloFetch() {
    if (helloName.value == "") {
        helloResponse.innerText = "Invalid input. Please fill all avliable inputs."
        return;
    }
    const response = await fetch(`http://localhost:5270/api/SayHello/HelloName/${helloName.value}`);
    let data = await response.text();
    console.log(data);
    helloResponse.innerText = data;
}

helloName.addEventListener('keydown', () => {
    if (event.key === 'Enter') {
        helloFetch();
    }
})

helloBtn.addEventListener('click', () => {
    helloFetch();
})