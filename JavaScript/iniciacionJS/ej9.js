//9. Contar y mostrar la cantidad de números pares e impares en un rango dado.
let n1 = 5;
let n2 = 10;

let par = 0;
let impar = 0;

//Bucle que recorreo los dos numeros y valida si es par o no
for (let i = n1 ; i <= n2; i++){
    (i%2 === 0) ? par++ : impar++; //Todavia estoy puliendo estos if Else
}
console.log("Los numero pares han sido: ", par, " los impares: ",impar);


/*
If else normal

if (i % 2 === 0){
    par++;
else{
    impar++;
}
}



*/