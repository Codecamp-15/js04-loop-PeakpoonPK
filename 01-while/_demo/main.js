console.log('learn while loop');

// console.log("staring...");

// // let i = 1;
// // while (i <= 10) {
// //     // loop block
// //     console.log(i)
// //     i = i + 1;
// //     // i++;
// //     // ++i;

// // }

// console.log("end...")


//  เมื่อตรงการทำหารลงตัว ให้ใช้ if ร่วมด้วย
// console.log("staring...");

// let i = 1;
// while (i <= 20) {
//     if (i % 3 == 0) {
//         console.log(i);
//     }
//     i++;
// }

// console.log("end...")


// console.log("staring...");

// let i = 1;
// while (i <= 20) {
//     if (i % 3 != 0) {
//         console.log(i);// ทุกตัวที่หารสามไม่ลง
//     }
//     i++;
// }

// console.log("end...")

// console.log("staring...");

// let i = 1;
// while (i <= 20) {

//     if (i % 5 == 0) {
//         console.log(`${i} : High Five`);
//     }
//     else if (i % 3 == 0) {
//         console.log(i);
//     }
//     i++;
// }

// console.log("end...")

// FizzBuzz
// Range : 1-20;
// divided by 3 : PRINT Fizz;
// divided by 5 : PRINT Buzz;
// divided by 3 and 5 : PRINT FizzBuzz;
// other : PRINT number;

// console.log("staring...");
// let i = 1;
// while (i = 20) {
//     if (i % 5 == 0 && i % 3 == 0) {
//         console.log(`${i} :FizzBuzz`);
//     }
//     else if (i % 5 == 0) {
//         console.log(`${i} : Bazz`);
//     }
//     else if (i % 3 == 0) {
//         console.log(`${i} : Fizz`);
//     }
//     else { console.log(`${i} :number`) }
//     i++;
// }
// console.log("end...");

console.log('learn while loop');

console.log("staring...");
let i = 1;
while (i <= 20) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} :FizzBuzz`);
    }
    else if (i % 3 == 0) {
        console.log(`${i} : Fizz`);
    }
    else if (i % 5 == 0) {
        console.log(`${i} : Bazz`);
    }
    else { console.log(`${i} :number`); }
    i++;
}

console.log("end...");