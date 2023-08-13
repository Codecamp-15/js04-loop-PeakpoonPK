console.log('Problem');


let n = +prompt('Enter Number');
let count = 0;
if (n < 0) n = -n;
// while (n >= 1) {
//     console.log(n);
//     count++;
//     n = n / 10;
// }
let sum = 0;
while (n) {

    let remainder = n % 10;
    n = (n - remainder) / 10;
    sum += remainder;
    count++;
}

console.log(count, sum)
