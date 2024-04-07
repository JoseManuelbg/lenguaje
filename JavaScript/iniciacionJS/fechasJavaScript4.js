const fechaAct = new Date();

let dia = fechaAct.getDay();

console.log(dia);

switch (dia) {
    case 0:
        dia = "Domingo";
        break;
    case 1:
    dia = "Lunes"
    break;

    case 2:
        dia = "Martes";
    break;

    case 3:
        dia= "Miercoles";
    break;
    case 4:
    dia = "Jueves";
    break;
    case 5:
        dia = "Viernes";
    break;
    case 6:
        dia = "Sabado";
    break;
    default:
        console.log("No existe el dia.")
        break;
}
console.log(dia);
