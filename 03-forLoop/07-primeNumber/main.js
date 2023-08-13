// ให้เขียนโค้ดเพื่อหาจำนวนเฉพาะตั้งแต่ 1 ถึง 100
// -prompt : จำนวนที่กำหนดเป็ฯจำนวนเฉพาะรึเปล่าฦ

// let n = prompt('Enter number');
// let isPrime = true; // flag


// for (let divider = 2; divider < n; divider++) {
//     if (n % divider == 0); isPrime = false;
// }
// if (isPrime) alert(`number${n} is prime number`);
// else alert(`number${n} not prime number`);

// for (let n = 2; n <= 100; n++) {
//     let isPrime = true; // flag
//     for (let divider = 2; divider < n; divider++) {
//         if (n % divider == 0) isPrime = false;
//     }
//     if (isPrime) console.log(n);
// }


//-------------------------------input 'break' for stop
for (let n = 2; n <= 100; n++) {
    let isPrime = true; // flag
    for (let divider = 2; divider < n; divider++) {
        if (n % divider == 0) isPrime = false; break;
    }
    if (isPrime) console.log(n);
}