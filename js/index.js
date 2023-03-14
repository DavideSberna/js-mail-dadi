// Mail

// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.



// Gioco dei dadi

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?

let users = [
    "davide sberna",
    "daniele pippo",
    "Marco pluto",
    "Alice battaglia",
    "Micheal sesto",
]
const sectionForm = document.querySelector("#email-form")
const userInput = document.querySelector("#user-input");
const emailInput = document.querySelector("#email-input");
const btn = document.querySelector("form button");

const confirms = document.createElement("div");
const confirmText = document.createElement("p");
confirms.appendChild(confirmText);
confirms.classList.add("confirm");



let indexUser = "";
let userconfirm = "";
let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


btn.addEventListener("click", emailValidation);

function emailValidation(){
    for(let i = 0; i < users.length; i++){
        indexUser = users[i]

        if(isNaN(parseInt(userInput.value)) && isNaN(parseInt(emailInput.value)) && userInput.value !== "" && emailInput.value !== ""){
            console.log("è vero");
            if(indexUser.includes(userInput.value.toLowerCase())){
                console.log(indexUser, "sei iscritto")
                if(emailInput.value.match(validRegex)){
                    console.log("Login di "+ " " + indexUser + " " + "effettuato con successo")
                    sectionForm.appendChild(confirms);
                    confirmText.innerText = "Account confermato"
                } else {
                    console.log("Mi spiace"+ " " + indexUser + " " + "la tua email non è corretta")
                    sectionForm.appendChild(confirms);
                    confirmText.innerText = "email non corretta"
                }
               
            } else{
                console.log("non sei iscritto")
                sectionForm.appendChild(confirms);
                confirmText.innerText = "Non sei iscritto"
            }

        } else {
            console.log("Inserisci dei valori corretti");
            sectionForm.appendChild(confirms);
            confirmText.innerText = "Compila i campi correttamente"

        }
    }


}









let min = 1;
let max = 6;



const btnRandom = document.querySelector("#btn-random");
btnRandom.addEventListener("click", startRandom);

function startRandom(){
    let userRandom = Math.floor(Math.random() * (max + 1 - min) + min);
    let botRandom = Math.floor(Math.random() * (max + 1 - min) + min);
    if(userRandom > botRandom){
        console.log("Hai vinto! il tuo numero random è" + " " + userRandom, "mentre il numero del Bot è", botRandom)
    } else if(userRandom < botRandom){
        console.log("Hai perso! il tuo numero random è" + " " + userRandom, "mentre il numero del Bot è", botRandom)
    } else {
        console.log("La partita è finita in parità." + " " + "Il tuo numero è", + userRandom, "e quello del Bot è", + botRandom)
    }


}
