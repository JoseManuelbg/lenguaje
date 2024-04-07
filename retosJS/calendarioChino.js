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
whatYear(607);
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

//COn fecha completa

let ejemplo = new Date("1995-12-25");
whatYear(ejemplo.getFullYear())

function whatYear(year){
    let animales = ["Mono", "Gallo", "Perro", "Cerdo", "Rata", "Buey", "Tigre", "Conejo", "Dragon", "Serpiente", "Caballo", "Oveja" ]; 
    if(year < 1924){
        console.log("Año invalido")
    }else{
    console.log (animales[year%12]);
    }
}
