const pickerCategorty = document.getElementById("pickerCategorty")
const pickerBtn = document.getElementById("pickerBtn")
const pickerResponse = document.getElementById("pickerResponse")

async function pickerFetch() {
    if (pickerCategorty.value == "") {
        pickerResponse.innerText = "Invalid input. Please fill all avliable inputs."
        return;
    }
    const response = await fetch(`http://localhost:5270/api/RestaurantPicker/MexicanPizzaOrFastFood/${pickerCategorty.value}`);
    let data = await response.text();
    console.log(data);
    pickerResponse.innerText = data;
}

pickerCategorty.addEventListener('keydown', () => {
    if (event.key === 'Enter') {
        pickerFetch();
    }
})

pickerBtn.addEventListener('click', () => {
    pickerFetch();
})