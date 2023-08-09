// Number 1
const angka = [1, 2, 4, 3, 5, 3, 2, 1];

const mengurutkanAngka = angka.slice().sort((a, b) => b - a);
console.log("Number 1 :", mengurutkanAngka);

// Number 2
function maxSubarray(numbers, length) {
  let maxSum = numbers.slice(0, length).reduce((acc, curr) => acc + curr);
  let currentSum = maxSum;

  for (let i = length; i < numbers.length; i++) {
    currentSum = currentSum + numbers[i] - numbers[i - length];
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

const inputArray = [-3, 4, 0, -2, 6, -1];
const panjangAngka = 2;
const hasil = maxSubarray(inputArray, panjangAngka);
console.log("Number 2 :", hasil);

// Number 3
function sumNumbers(obj) {
  let sum = 0;

  for (const key in obj) {
    const value = obj[key];

    if (typeof value === "object") {
      sum = sum + sumNumbers(value);
    } else if (typeof value === "number" && value % 2 === 0) {
      sum = sum + value;
    }
  }

  return sum;
}

const input = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 4 }, ee: "car" },
};
const output = sumNumbers(input);
console.log("Number 3 :", output);
