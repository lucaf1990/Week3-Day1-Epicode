/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2) {
  let somma = l1 * 2 + l2 * 2;
  return (area = somma);
}

area(10, 5);

console.log(area);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
crazySum(15, 12);
function crazySum(numInt1, numInt2) {
  let somma = numInt1 + numInt2;
  let numUguali = numInt1 * 3 + numInt2 * 3;
  if (numInt1 !== numInt2) return (crazySum = somma);
  else if (numInt1 === numInt2) return (crazySum = numUguali);
}
console.log(crazySum);
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito 
 come parametro e 19. Deve inoltre tornare la differenza assoluta moltiplicata per tre
qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numFor = 19;
crazyDiff(1);
function crazyDiff(numPar) {
  let absDif = numPar - numFor;
  let absNeg = absDif * -1 * 3;
  if (absDif < 0) {
    return (crazyDiff = absNeg);
  } else if (absDif > 0) {
    return (crazyDiff = absDif);
  }
}

console.log(crazyDiff);
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true 
 se n è compreso tra 20 e 100 (incluso) oppure se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
boundary(95);
function boundary(numPar) {
  if ((numPar >= 20 && numPar <= 100) || numPar === 400)
    return (boundary = true);
  else return (boundary = false);
}
console.log(boundary);
/* ESERCIZIO 5
Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita,
ma se la stringa fornita comincia già con "EPICODE" allora deve
ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const epify = (stringa) => {
  if (stringa.startsWith("Epicode")) {
    return stringa;
  } else {
    return "EPICODE " + stringa;
  }
};

console.log(epify("EPICODE Italia"));
console.log(epify("Ciaoooooooooo"));
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. 
 La funzione deve controllare che il parametro sia un multiplo di 3 o di 7.
(Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(numPos) {
  if (numPos % 3 === 0) {
    return (check3and7 = numPos);
  } else if (numPos % 7 === 0) {
    return (check3and7 = numPos);
  } else
    return (check3and7 = "Il tuo numero non è ne divisibile per 3 ne per 7");
}
check3and7(41);
console.log(check3and7);
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa 
 fornita 
 come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(stringa) {
  let stringaTag = stringa.split("");
  console.log(stringaTag);
  let stringaCont = stringaTag.reverse();
  console.log(stringaCont);
  let risultato = stringaCont.join("");
  console.log(risultato);
}

console.log(reverseString("Ciao"));
// /* ESERCIZIO 8
//  Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
//  La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
// */

const upperFirst = function (str) {
  const arrParole = str.split(" ");
  console.log(arrParole);
  let unite = [];

  for (let i = 0; i < arrParole.length; i++) {
    const parola = arrParole[i];

    const primaLet = parola.charAt(0);

    const fineParola = parola.slice(1);

    unite.push(primaLet.toUpperCase() + fineParola);
  }
  return unite;
};
console.log(upperFirst("La funzione deve rendere maiuscola"));

// /* ESERCIZIO 9
//  Scrivi una funzione di nome "cutString", che riceve come parametro una stringa.
// La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
//  della stringa originale.
// */


 const cutString = function (lettere){
   const paroleSeparate = lettere.split(" ");
  for(let i=0;i<paroleSeparate.length;i++){
   paroleSeparate[i]
 }
 };

// /* SCRIVI QUI LA TUA RISPOSTA */

// /* ESERCIZIO 10
//  Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
// */

const giveMeRandom = function (n) {
  const arrRandomNumber = [];
  for (let i = 0; i < n; i++) {
    let randomNumber = Math.floor(Math.random() * 11);
    arrRandomNumber.push(randomNumber);
  }
  return arrRandomNumber;
};
console.log(giveMeRandom(34));
