// Create a Chessboard

// for each instance of the loop
//   add '# # # #\n' to the string
// at the end of loop:
// console.log the str

let str = '';

let count = 1;
while (count < 9) {
  str += '# # # #\n';
  count++
}

console.log(str);
