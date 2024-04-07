//14. Llama a la función calcularEdad con tu año de nacimiento y muestra el resultado
//en la consola.

let anionac = 2005;


console.log(calcularEdad(anionac));
function calcularEdad(nacimiento) {
    const fechaAct = new Date;
    return  fechaAct.getFullYear() -nacimiento ;
}