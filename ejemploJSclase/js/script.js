function validaFormulario() {
    

    //Acceder a los datos
    
    const nombre = document.getElementById("nombre").value;
    const tel = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const passwd = document.getElementById("passwd").value;
    const opcion = document.getElementById("desp").value;
    



    let errores = [];

    // 1 Validaciones
    if (nombre === "") {
        errores.push("Por favor pon tu nombre");
    }

    // 2 Validacion
    if (passwd.length < 8){
        errores.push("Por favor que la contra sea mas larga");
    }

    // 3 Validacion tlf
    if (tel !== "") { 
        
        let expresion = /^\d{9}$/ ;
        if(!expresion.test(tel)){
            errores.push("Pon bien tu telefono");
        }
    }else{
        errores.push("Por favor, ingresa un numero de telefono")
    }


    //4 validacion
    if(opcion != 0){
        errores.push("Elije una opcion valida");
    }


    //Mostrar Errores
    if(errores.length>0){
    mostrarErrores(errores);
        return false;
    }
   


    return true;
}




function mostrarErrores(errores) {

    let divErrores = document.getElementById("errores");
    divErrores.innerHTML="";
    divErrores.style.display="block";

    let ul = document.createElement("ul");

    errores.forEach(function(error) {
        
        let li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
        


    });
    divErrores.appendChild(ul);
}