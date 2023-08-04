// function* generatorShowInstructors(){
//     console.log("Iniciando")
//     yield "Dai"
//     yield "Ernesto"
//     return ("Terminando")
//     // console.log("Terminando")
// }

// const generatorObject = generatorShowInstructors();
// console.log(generatorObject)

// console.log(generatorObject.next());
// console.log(generatorObject.next());
// console.log(generatorObject.next());

function* naturalNumbers () {
    let number = 1;
    while(true){
        yield number;
        number += 1
    }
}

const generatorObject = naturalNumbers();
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());

function* naturalNumbers2 () {
    let number = 1;
    while(true){
        console.log(number);
        number += 1
    }
}

console.log(naturalNumbers2());