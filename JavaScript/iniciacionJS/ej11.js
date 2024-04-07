//11. Buscar el número mayor en un array dado.
let arrayNumerico = [4,34,67,245,7,9,1,0];
let mayorNum = arrayNumerico[0];
for (let i = 0 ; i < arrayNumerico.length ; i++){
    
    if (arrayNumerico[i] >= mayorNum){
        mayorNum = arrayNumerico[i];
    }
}
console.log("EL mayor numero de la cadena anterior es: ",mayorNum);
//La version corta seria (arrayNumero[i] >= mayorNum) ? mayorNum = arrayNumero[i] : null;
//Pero el null ese no me convence entonces mejor prevenir que curar

//Solucion alternativa

let mayorNumeroMetodo = Math.max(...arrayNumerico);
console.log("Usando el math el mayor numero es: ", mayorNumeroMetodo);


//Explicacion:
/*
El math.max calcula el maximo, pero necesita un array directamente
si le pones la variable da error, entonces usando los "..."(operador de propagacion)
se puede mandar como argumentos individuales esta informacion

**Eso he entendido yo


*/