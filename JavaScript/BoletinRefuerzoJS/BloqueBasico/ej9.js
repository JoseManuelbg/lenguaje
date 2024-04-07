// 9. Crea una función llamada esPar que tome un número como parámetro y devuelva
//true si es par o false si es impar.

function esPar(numero) {
    let res = false;
    if(numero%2 == 0){
        res = true;
    }
    return res;
}