//Con variable
let year = 1968;
whatYear(year);

//Case mono
whatYear(2028);
//case Gallo
whatYear(2029);

//Case Perro
whatYear(2006);
//Case Cerdo
whatYear(2007);
//Case Rata
whatYear(1972);
//Case Buey
whatYear(1997);
//Case Tigre
whatYear(1986);
//Case Conejo
whatYear(2023);
//Case Dragon 
whatYear(1976);
//Case Serpiente
whatYear(1977);
//Case Caballo
whatYear(2026);
//Case Oveja
whatYear(1979);
function whatYear(year){
    switch(year%12){
        case 0:
            console.log("Mono");
            break;
        case 1:
            console.log("Gallo");
            break;
        case 2:
            console.log("Perro");
            break;
        case 3:
            console.log("Cerdo");
            break;
        case 4:
            console.log("Rata");
            break;
        case 5:
            console.log("Buey");
            break;
        case 6:
            console.log("Tigre");
            break;
        case 7:
            console.log("Conejo");
            break;
        case 8:
            console.log("Dragon");
            break;
        case 9:
            console.log("Serpiente");
            break;
        case 10:
            console.log("Caballo");
            break;
        case 11:
            console.log("Oveja");
            break;
    };
}