//Approccio Casi


const ulEl = document.querySelector("ul");
const name = document.querySelector("#name");
const number = document.querySelector("#number");


const btnEl = document.querySelector("button");


const people = [
    "Luke Skywalker ",
    "Jack Burton",
    "Jhonny Silverhad",
    "Bilbo Baggins",
    "Rick Sanchez",
  ];



//FUNZIONE STAMPA ELEMENTI #VERS.1
// people.map(person => {

//   //Con "createElement" creiamo un nuovo elemento difinito a parametro 
//   const liEl = document.createElement("li");

//   liEl.textContent = person.split(" - ")[0];

//   // Con appenchild annidiamo liEl all'elemento padre ulEl
//   ulEl.appendChild(liEl);

// })



//FUNZIONE STAMPA ELEMENTI #VERS.2

const createLiEl = (listitem,parent) => {
  
  const liEl = document.createElement("li");

  liEl.textContent = listitem.split(" - ")[0];

  parent.appendChild(liEl);

};

people.map ((person) => createLiEl(person, ulEl));




//Click su bottone AGGIUNGI CONTATTO
btnEl.addEventListener('click',() => { 
  const liEl = document.createElement("li");
  people.push((`${name.value}  ${number.value}`));
 
  people.map((element) => liEl.textContent = element.split('').join(""));
  
  // Con appenchild annidiamo liEl all'elemento padre ulEl
  ulEl.appendChild(liEl);
    

  //-----------------------------------------------------------------

//Ritorna la nodelist
const liEls = document.querySelectorAll("li");


//Rimuovi elemento al click con textcontent = "" 
liEls.forEach (liEl => {
  liEl.addEventListener('click',() => 
//liEl.textContent = ""); 

//Versione con toggle + aggiunta di una classe CSS (visibility hidden)
// liEl.classList.toggle("li-text"))

//Versione con "removeChild"
ulEl.removeChild(liEl))
})

})

