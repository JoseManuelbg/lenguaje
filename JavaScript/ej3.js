//3. Calcular el factorial de un número dado.
let n1 = 5;
let factorial = 1;

//Este bucle tiene la longitud del numero dado, multiplica cada numero 
//dado por el siguiente para calcular el factorial
for (let i = 1; i <= n1; i++){
    factorial *=i;
}
console.log("El factorial de "+n1+" es ", factorial);