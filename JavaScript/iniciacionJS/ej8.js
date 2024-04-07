//8. Calcular la suma de los dígitos de un número dado.
let n1 = 34;
let nFinal = 0;
let nSeparado = n1.toString();


//Bucle for se que encarga de recorrer la cadena de numero dados
for (let i = 0 ; i < nSeparado.length ; i++){
    //ParseInt convierte de String a Int y se suma a lo que lleve
    //el numero final(por defecto 0)
    nFinal += parseInt(nSeparado[i]);
}
console.log("La suma de los digitos de: ",n1," es: ",nFinal);