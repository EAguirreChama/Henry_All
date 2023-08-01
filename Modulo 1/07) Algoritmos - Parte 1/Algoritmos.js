const Array1 = [1,2,3,4,5,6]
const Array2 = [1,2,3,4,5,6,7]

for (let i = 0 ; i < Array1.length ; i++) {
    for (let j = 0 ; j < Array1.length ; j++) {
        console.log(Array1[j])
    }
}
// Complejidad se representa
// O (N(representa la cantidad de pasos de Array1) * M(representa la cantidad de pasos de Array2))
// O (N * M) => (6 * 7) = 42