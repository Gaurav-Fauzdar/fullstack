const sampleArray = [10, 25, 47, 12, 67, 32, 89, 45];

function customComparison(a, b) {
  return a - b;
}

function findMinMax(arr, compareFn) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (compareFn(arr[i], min) < 0) {
      min = arr[i];
    }
    if (compareFn(arr[i], max) > 0) {
      max = arr[i];
    }
  }

  return { min, max };
}

console.log("Sample Array Min/Max:", findMinMax(sampleArray, customComparison));

const anotherArray = [5, 8, 2, 19, 34, 7, 1];
console.log("Another Array Min/Max:", findMinMax(anotherArray, customComparison));

function findNear(arr)
