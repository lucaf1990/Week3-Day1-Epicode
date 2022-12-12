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

function epify(stringa) {
  let text1 = "EPICODE";
  if (stringa.split(" ") === [0]) return epify("" + "EPICODE");
  else if (stringa.split("") === [0]) return epify("EPICODE");
}
epify("");
console.log(epify);

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
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita 
 come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
reverseString("EPICODE");
function reverseString(stringa) {
  let singoLet = stringa.split("");
  console.log(singoLet);
  for (let i = 0; 0 < singoLet.length; ) 
}

/*    let ciao = [];
let splitString = ciao.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join(" ");
  return reverseString(joinArray);
}




console.log(reverseString);
/*function reverseString(str) {
    // Step 1. Usa il metodo split() per restituire un nuovo array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Usa il metodo reverse() per invertire l'array appena creato
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Usa il metodo join() per unire tutti gli elementi della stringa in un array
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Restituisci la stringa invertita
    return joinArray; // "olleh"
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
