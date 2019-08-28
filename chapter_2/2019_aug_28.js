// Create a Chessboard

// for each instance of the loop
//   add '# # # #\n' to the string
// at the end of loop:
// console.log the str

let str = '';

let count = 1;
while (count < 9) {
  str += '# # # # \n';
  count++
}

console.log(str);

// Create a customizable Chessboard / grid

function create_grid(height, width) {

  if (height) {
    if (width) {
      let str = '';
      let count = 1;
      let maxCount = height+1;
      while (count < maxCount) {
        for (let i=0; i < width; i++) {
          if (i != width-1) {
            str += '# ';
          } else {
            str += '#\n';
          }
        }
        count++
      }

      console.log(str);
    } else {
      console.log("Error: Must have width!");
    }
  } else {
    console.log("Error: Must have height!");
  }
}
