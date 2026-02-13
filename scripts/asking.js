const askName= document.getElementById("askName")
 const askTime= document.getElementById("askTime")
const askBtn= document.getElementById("askBtn")
const askResponse= document.getElementById("askResponse")


async function askFetch(){
if(askName.value=="" || askTime.value=="") {
    askResponse.innerText="Invalid input. Please fill all avliable inputs."
    return;
}
const response = await fetch(`http://localhost:5270/api/AskingQuestions/Questions/${askName.value}/${askTime.value}`);
let data = await response.text();
console.log(data); 
askResponse.innerText=data;
}

askName.addEventListener('keydown', () => {
  if (event.key === 'Enter') {
    askFetch();
  }})

askTime.addEventListener('keydown', () => {
  if (event.key === 'Enter') {
    askFetch();
  }})

  askBtn.addEventListener('click',()=>{
    askFetch();
  })