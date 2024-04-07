//13. Crea una función llamada calcularEdad que tome el año de nacimiento como
//parámetro y devuelva la edad.

function calcularEdad(nacimiento) {
    const fechaAct = new Date;
    return fechaAct.getFullYear - nacimiento ;
}