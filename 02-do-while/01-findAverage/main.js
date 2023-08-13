let ansNumber = '';
let isEmpty; // Must to write out of 'DO'
let isNan;

do {
    ansNumber = prompt('Enter your  number') || ''; // null || ""
    isEmtry = ansNumber.trim() === '';
    isNan = isNaN(ansNumber);
    outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99;
    if (isEmpty || isNan) {
        alert('Invalid input, try 1-99');
    } else if (outOfRange) {
        alert('Invalid input, try 1-99');
    }

} while (isEmpty || isNan);