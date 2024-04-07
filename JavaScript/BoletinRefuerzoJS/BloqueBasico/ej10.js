//10. Llama a la función esPar con varios números y muestra los resultados en la
//consola.

let numero = 10;
console.log(esPar(numero));

numero =5;
console.log(esPar(numero));

numero =-8;
console.log(esPar(numero));

numero =4653478;
console.log(esPar(numero));

numero =0;
console.log(esPar(numero));

function esPar(numero) {
    let res = false;
    if(numero%2 == 0){
        res = true;
    }
    return res;
}