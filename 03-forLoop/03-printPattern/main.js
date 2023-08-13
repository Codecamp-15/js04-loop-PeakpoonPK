
// for (let i = 1; i <= 4; i++) {
//     // console.log('*');
//     let str = ""
//     for (let j = 1; j <= 4; j++) {
//         str = str + "*"
//     }
//     console.log(str);
// }

for (let i = 1; i <= 4; i++) { //กำหนดแถว
    let str = '';
    for (let j = 1; j <= i; j++) {
        str += '*';
    }
    console.log(str);
}
// let str = '';
// for (let i = 1; i <= 4; i++) { 
//     for (let j = 1; j <= i; j++) {
//         str += '*';
//     }
//     str += '\n'
// } console.log(str);