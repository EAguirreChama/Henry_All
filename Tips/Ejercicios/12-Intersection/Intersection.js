// Solucion 1
function intersection (arr1, arr2) {
  // Your code here:
  const result = [];

    for(const num1 of arr1){
      for(const num2 of arr2){
        if(num1 === num2) result.push(num1);
      }
    }
    return result;
};
module.exports = intersection

// Solucion 2
function intersection2 (arr1, arr2) {
  // Your code here:
  const result = [];

  for(const num1 of arr1){
    if(arr2.includes(num1)) result.push(num1);
  }

  return result;
};
module.exports = intersection2

// Solucion 3
function intersection3 (arr1, arr2) {
  // Your code here:
  const result = [];

  for(const num1 of arr1){
    if(arr2.includes(num1)) result.push(num1);
  }

  return result;
};
module.exports = intersection3

// Solucion 4
function intersection4 (arr1, arr2) {
  // Your code here:
  return arr1.filter(num1 => arr2.includes(num1));
};
module.exports = intersection4

// Solucion 5
function intersection5 (arr1, arr2) {
  // Your code here:
  // arr1 = [1, 3, 5, 7, 10]
  //                        i
  // arr2 = [2, 3, 6, 8, 10, 20]
  //                          j

  let i = 0; // 5
  let j = 0; // 5
  const result = []; // [3, 10]

  while(i < arr1.length && j < arr2.length){ // 5 < 5 && 5 < 6
    const num1 = arr1[i]; // 10
    const num2 = arr2[j]; // 10

    if(num1 === num2){ // 10 === 10
      result.push(num1);
      i++;
      j++;
    }
    else if(num1 < num2) i++; // 10 < 8
    else j++;
  }

  return result; // [3, 10]
};
module.exports = intersection5

// Solucion 6
function intersection6 (arr1, arr2) {
// Your code here:
// arr1 = [1, 3, 5, 7, 10]
//                      ^
// arr2 = [2, 3, 6, 8, 10, 20]
//                          ^
const hashMap = {}; // {1: true, 3: true, 5: true, 7: true, 10: true}
const result = []; // [3, 10]

for(const num1 of arr1) hashMap[num1] = true;

for(const num2 of arr2){
  if(hashMap[num2]) result.push(num2);
}
return result; // [3, 10]
};
module.exports = intersection6

// Solucion 7
function intersection7 (arr1, arr2) {
  // Your code here:
  const hashMap = {};
  for(const num1 of arr1) hashMap[num1] = true;
  // console.log(hashMap);
  return arr2.filter(num2 => hashMap[num2]);
};
module.exports = intersection7

// Solucion 8
function intersection8 (arr1, arr2) {
  // Your code here:
  const hashMap = new Map;
  for(const num1 of arr1) hashMap.set(num1, true)
  // console.log(hashMap);
  return arr2.filter(num2 => hashMap.get(num2));
};
module.exports = intersection8