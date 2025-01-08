//Challenge 1
const getCelsius = (f) => ((f - 32) * 5) / 9;
console.log(`The temp is ${getCelsius(32)} \xB0C `);

// Challenge 2
function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    min,
    max,
  };
}

console.log(minMax([2, 31, 4, 5, 6]));