const libName= document.getElementById("libName")
const libMood= document.getElementById("libMood")
const libFood= document.getElementById("libFood")
const libAnimal= document.getElementById("libAnimal")
const libAdjective= document.getElementById("libAdjective")
const libItem= document.getElementById("libItem")
const libPlace= document.getElementById("libPlace")
const libActivity= document.getElementById("libActivity")
const libBtn= document.getElementById("libBtn")
const libResponse= document.getElementById("libResponse")


async function libFetch(){
if(libName.value=="" || libMood.value=="" || libFood.value=="" || libAnimal.value=="" || libAdjective.value=="" || libItem.value=="" || libPlace.value=="" || libActivity.value=="" ) {
    libResponse.innerText="Invalid input. Please fill all avliable inputs."
    return;
}
const response = await fetch(`http://localhost:5270/api/MadLib/MadLib/${libName.value}/${libMood.value}/${libFood.value}/${libAnimal.value}/${libAdjective.value}/${libItem.value}/${libPlace.value}/${libActivity.value}`);
let data = await response.text();
console.log(data); 
libResponse.innerText=data;
}

libName.addEventListener('keydown', () => {
  if (event.key === 'Enter') {
    libFetch();
  }})

libActivity.addEventListener('keydown', () => {
  if (event.key === 'Enter') {
    libFetch();
  }})

  libMood.addEventListener('keydown', () => {
  if (event.key === 'Enter') {
    libFetch();
  }})

libFood.addEventListener('keydown', () => {
  if (event.key === 'Enter') {
    libFetch();
  }})

  libAnimal.addEventListener('keydown', () => {
  if (event.key === 'Enter') {
    libFetch();
  }})

libAdjective.addEventListener('keydown', () => {
  if (event.key === 'Enter') {
    libFetch();
  }})

  libItem.addEventListener('keydown', () => {
  if (event.key === 'Enter') {
    libFetch();
  }})

libPlace.addEventListener('keydown', () => {
  if (event.key === 'Enter') {
    libFetch();
  }})

  libBtn.addEventListener('click',()=>{
    libFetch();
  })