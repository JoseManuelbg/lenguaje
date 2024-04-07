//23. Crea una función llamada calcularFactorial que tome un número como
//parámetro y devuelva su factorial.

function calcularFactorial(num) {
    let n = 1;
    for(let i = 1 ; i <= num; i++){
        n *= i;
    }
    return n;
}