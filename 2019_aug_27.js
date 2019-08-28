

// create pattern
let str = '#'

for(let count=0; count<7; count++) {
  console.log(str);
  str += '#';
}
str = ''




// fizzbuzz
for(let count=1; count<101; count++) {
  if (count % 3 == 0 && count % 5 == 0) {
    console.log('FizzBuzz')
  } else if (count % 3 == 0){
    console.log('Fizz')
  } else if (count % 5) {
    console.log('Buzz')
  }
}
