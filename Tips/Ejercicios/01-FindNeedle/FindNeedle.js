function FindNeedle (haystack, needle) {
  // Your code here:

  // Primera forma
  // for(let i = 0 ; i < haystack.length ; i++){

  //   for(let j = 0 ; j < needle.length ; j++){
  //     // Comparamos si el valor de neddle en la posicion de j es distinto a haystack en la posicion de i + j
  //     if(needle[j] !== haystack[i + j]) break;
  //     // Si j es igual al largo de neddle - 1, retornamos i
  //     if(j === needle.length - 1) return i;
  //   }
  // }
  // return -1;

  // Segunda forma
  for(let i = 0 ; i < haystack.length ; i++) {
    const sliced = haystack.slice(i, i + needle.length);
    if(sliced === needle) return i;
  }
  return - 1;
}

console.log(FindNeedle("react-redux" , "redux"))


module.exports = FindNeedle