//10. Calcular el promedio de una serie de números predefinidos.
let numero = [3,5,6,69];

let suma = 0;

for (let i = 0 ; i < numero.length; i++){
    suma += numero[i];
}
let media = suma / numero.length;
console.log("La media de los numeros es: "+media)