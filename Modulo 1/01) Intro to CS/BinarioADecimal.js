//Para binario empiezan las posiciones de derecha a izquierda

// 100101010010101001010 => si termina en 0 >>> Es par
//                          si termina en 1 >>> Es impar

//Ejemplo para pasar de Binario a Decimal

// Binario       1            0            1        => Impar
// Posiciones    2            1            0
// Calculos    (2^2)*1  +   (2^1)*0   +  (2^0)*1    => Base 2 siempre, elevado a su posición y multiplicado por el numero
// Resultado     4      +     0       +     1       => 5


// Binario       1               0             1             1        => Impar
// Posiciones    3               2             1             0
// Calculos    (2^3)*1    +    (2^2)*0   +   (2^1)*1   +   (2^0)*1
// Resultado     8        +      0       +     2       +     1        => 11