let x = 3;
let y = 5;

// Iterate through numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
  // Check if the number is a multiple of both x and y
  if (i % x === 0 && i % y === 0) {
    console.log('FooBar');
  }
  // Check if the number is a multiple of x
  else if (i % x === 0) {
    console.log('Foo');
  }
  // Check if the number is a multiple of y
  else if (i % y === 0) {
    console.log('Bar');
  }
  // If the number is not a multiple of either x or y, print the number
  else {
    console.log(i);
  }
}
