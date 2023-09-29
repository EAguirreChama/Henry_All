function spyOn (fn) {
  // Your code here:
  let callCount = 0;
  const calledWith = new Map();
  const returned = new Map();

  const spy = (...args) => {
    callCount++;
    for (const arg of args) calledWith.set(arg, true);
    const result = fn(...args);
    returned.set(result, true);
    return result;
  }

  spy.getCallCount = () => callCount;
  spy.wasCalledWith = (value) => !!calledWith.get(value);
  spy.returned = (value) => !!returned.get(value);

  return spy;
}

const adder = (n1, n2, n3) => {
  return n1 + n2 + n3
}

adderSpy = spyOn(adder);
adderSpy(2, 3)
console.log(adderSpy.wasCalledWith(2)); // (true)
console.log(adderSpy.wasCalledWith(7)); // (false)

// función (original)

// spyOn => f(original) => función(n, n1, n2, ...)
//          getCallCount()
//          wasCalledWith(value)
//          returned(value)

// Closure:
// 1 - Función contenedora
// 2 - Retorna una función
// 3 - La función retornada usa variables en scope de la contenedora

module.exports = spyOn
