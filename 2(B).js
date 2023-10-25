// Perform sorting of an array in descending order

const numbers = [1, 2, 6, 0, 3, 9];

numbers.sort(function(a, b) {
  return b - a; 
});

console.log(numbers);
