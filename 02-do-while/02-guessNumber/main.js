// let ansNumber = prompt('Enter your magic number'); //null,string:"", "    ","qweqeq","12"
// // ansNumber === null || ansNumber.trim() == '' || isNaN(ansNumber) //it use for check upper.....

// // let isNull = ansNumber === null; do use this element because Run First Null. it can not to Run Continue
// // let isEmpty = ansNumber.trim() === '';
// // let isNaN = isNaN(ansNumber);
// let isValid = ansNumber == null || ansNumber.trim() === '' || isNaN(ansNumber);
// let outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99;
// let isInRange = Number(ansNumber) >= 1 && Number(ansNumber) <= 99;

// if (isValid) {
//     alert('Invaild Input');
// } else if (outOfRange) {
//     alert('Invalid Range');
// } else if (isInRange) {
//     alert('Try to guess number'); // Promgram : player 2
// }

// --------------------------------------------------------------------
// V2 input untill input correct, or Esc to out

let ansNumber = '';
let isEmpty; // Must to write out of 'DO'
let isNan;
let outOfRange;

do {
    ansNumber = prompt('Enter your magic number') || ''; // null || ""
    isEmtry = ansNumber.trim() === '';
    isNan = isNaN(ansNumber);
    outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99;
    if (isEmpty || isNan) {
        alert('Invalid input, try 1-99');
    } else if (outOfRange) {
        alert('Invalid input, try 1-99');
    }

} while (isEmpty || isNan);

//-------------------------------------------------
//quess Agian
// Hint OutOfRange
//Hint Invalid Range

// let guessNumber;

// do {
//     guessNumber = prompt("Enter your answer") || '';
// }
// while(guessNumber != +ansNumber)
let guessNumber;

do {
    guessNumber = prompt("Enter your answer") || '';
    let outOfRange = Number(guessNumber) < 1 || Number(guessNumber) > 99;

    isEmtry = guessNumber.trim() === '';
    isNan = isNaN(guessNumber);
    outOfRange = Number(guessNumber) < 1 || Number(guessNumber) > 99;
    if (isEmpty || isNan) {
        alert('Invalid input, try 1-99');
    } else if (outOfRange) {
        alert('Invalid input, try 1-99');
    }
    else if (+guessNumber > +ansNumber) {
        alert('Too High');
    }
    else if (+guessNumber < +ansNumber) {
        alert('Too Low');
    }
    else if (+guessNumber == +ansNumber) {
        alert('Correct');
    }
}
while (guessNumber != +ansNumber)


//ลองทำเพิ่มให้ทายแค่ 5 ครั้ง

/*
For USER 1 
    GET number 
    IF  in range 1-99
        GO TO user 2
    ELSE
        PRINT : Invalid Range
        EXIT

For USER 1 
    GET number 
    IF  out  range 1-99
        PRINT : Invalid Range
        EXIT
    ELSE
        GO TO user 2

*/



/*
FOR USER 2 

WHILE guess !== anser
    GET guess from USER 2
    ADD count 1
    IF guess === answer 
        PRINT correct 
        PRINT count
    ELSE IF guess < answer
        PRINT less than 
    ELSE IF guess > answer
        PRINT more than 
    **ELSE**

*/