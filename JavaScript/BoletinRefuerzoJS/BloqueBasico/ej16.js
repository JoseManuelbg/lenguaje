//16. Llama a la función esMayorDeEdad con varias edades y muestra los resultados en
//la consola.

let edad = 18;
console.log(esMayorDeEdad(edad));

edad = 3;
console.log(esMayorDeEdad(edad));

edad = 90;
console.log(esMayorDeEdad(edad));

edad = 57;
console.log(esMayorDeEdad(edad));


function esMayorDeEdad(edad) {
    let res = false;
    if(edad >=18){
        res = true;
    }
    return res;
}