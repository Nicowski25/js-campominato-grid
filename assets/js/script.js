//L'utente clicca su un bottone che genererà  una griglia di gioco quadrata. Ogni cella ha un numero progressivo da 1 a 100. Ci saranno quindi 10 caselle x 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emette in console un messaggio con il numero della cella cliccata.

//identifico il bottone
const playBtn = document.getElementById('playbtn')
console.log(playBtn);


//impostiamo la grandezza
const gridsize = 100;

playBtn.addEventListener("click", game(gridsize))

//creiamo la funzione onclick
function game(boxSize) {
    //indentifico il container dalla dom
    const container = document.querySelector('.container')
    for (let i = 1; i <= boxSize; i++) {
        //impostiamo le box da appendere
        const boxCreate = `<div class="box"> ${i} </div>`
        //inseriamo le box nel container
        container.innerHTML += boxCreate
        console.log(i);    
    }
}