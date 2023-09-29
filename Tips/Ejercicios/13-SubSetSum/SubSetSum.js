function subsetSum (nums, n) {
  // Your code here:
  const sumas = [0];
  for (const num of nums) {
    for (const sum of [...sumas]) {
      const result = num + sum;
      if (result === target) return true;
      result < target && sumas.push(result);
    }
  }
  return false;
};

module.exports = subsetSum
// sumas = [0, 1, 10, 11, 5, 6, 15, 16, 3, 4, 13, 14, 8, 9, 18, 19 ]
//                                   ↑
console.log(subSetSum([1, 10, 5, 3], 9)); //(true)
// console.log(subSetSum([1, 10, 5, 3], 19)); //(true)
// console.log(subSetSum([1, 10, 5, 3], 2)); //(false)
// console.log(subSetSum([1, 10, 5, 3], 10)); //(true)