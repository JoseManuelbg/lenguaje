//24. Llama a la función calcularFactorial con varios números y muestra los
//resultados en la consola.

let num = 6;

console.log(calcularFactorial(num));

num = 5;
console.log(calcularFactorial(num));

num = 10;
console.log(calcularFactorial(num));

num = 1;
console.log(calcularFactorial(num));

function calcularFactorial(num) {
    let n = 1;
    for(let i = 1 ; i <= num; i++){
        n *= i;
    }
    return n;
}