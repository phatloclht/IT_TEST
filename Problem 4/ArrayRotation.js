function rotateSparseArray(arr, steps) {
  const nonDefaultValues = [];
  const indices = [];

  arr.forEach((value, index) => {
    if (value !== null) {
      nonDefaultValues.push(value);
      indices.push(index);
    }
  });

  // Rotate the non-default values
  const len = nonDefaultValues.length;
  const rotation = steps % len;
  const rotatedValues = nonDefaultValues
    .slice(-rotation)
    .concat(nonDefaultValues.slice(0, -rotation));

  // Create a copy of the original array to hold the result
  const result = arr.slice();

  // Insert the rotated values
  indices.forEach((index, i) => {
    result[index] = rotatedValues[i];
  });

  return result;
}

const inputArray = [1, null, 2, null, 3];
const steps = 2;
const result = rotateSparseArray(inputArray, steps);
console.log(result);
