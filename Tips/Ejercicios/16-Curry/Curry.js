function curry (fn) {
  // Your code here:
  // console.log(fn.length);
  const args = [];
  
  return function ft37a(currentArg){
    // console.log(currentArg);
    args.push(currentArg)
    // console.log(args);
    if(fn.length === args.length) return fn(...args);
    return function(nextArg){
      // console.log(nextArg);
      return ft37a(nextArg)
    };
  };
};

const calcAllFour = (var1, var2, var3, var4, var5) => { // 1, 2, 5, 8, 4
  return var1 + var2 - var3 * var4 - var5 // 1 + 2 - 5 * 8 => 1 + 2 - 40 => 3 - 40 => -37
};

const curriedCalcAllFor = curry(calcAllFour) // args = [1, 2, 5, 8, 4]
// function ft37a(currentArg){ // 8
//   args.push(currentArg)
//   if(fn.length === args.length) return fn(...args);
//   return function(nextArg){
//     return ft37a(nextArg)
//   }
// }
const curriedCalcAllFor2 = curriedCalcAllFor(1)
//  function(nextArg){
//     return ft37a(nextArg)
//   }
const curriedCalcAllFor3 = curriedCalcAllFor2(2);
// return ft37a(nextArg)
const curriedCalcAllFor4 = curriedCalcAllFor3(5);
const curriedCalcAllFor5 = curriedCalcAllFor4(8);
const curriedCalcAllFor6 = curriedCalcAllFor5(4);

// console.log(curriedCalcAllFor6);

// Este ejemplo con 1 solo arg
// const one = (a) => a + 1;
// const curriedOne = curry(one); // function(a){ return fn(a) } => (2) => 2 + 1 ==> 3

// console.log(curriedOne(2));

// Este ejemplo con 2 args
// const two = (a, b) => a + b;
// const curriedTwo = curry(two); // fn(arg1){ return fn(arg2){ return fn(arg1, arg2) } }
// const curriedTwoArg2 = curriedTwo(3) // fn(arg2){ return fn(arg1, arg2) } 
// console.log(curriedTwoArg2(2))

module.exports = curry
