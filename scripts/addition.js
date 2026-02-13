const addFirstNum = document.getElementById("addFirstNum")
const addSecondNum = document.getElementById("addSecondNum")
const addBtn = document.getElementById("addBtn")
const addResponse = document.getElementById("addResponse")


async function addFetch() {
    if (addFirstNum.value == "" || addSecondNum.value == "") {
        addResponse.innerText = "Invalid input. Please fill all avliable inputs."
        return;
    }
    const response = await fetch(`http://localhost:5270/api/Addition/TwoNumbers/${addFirstNum.value}/${addSecondNum.value}`);
    let data = await response.text();
    console.log(data);
    addResponse.innerText = data;
}

addFirstNum.addEventListener('keydown', () => {
    if (event.key === 'Enter') {
        addFetch();
    }
})

addSecondNum.addEventListener('keydown', () => {
    if (event.key === 'Enter') {
        addFetch();
    }
})

addBtn.addEventListener('click', () => {
    addFetch();
})