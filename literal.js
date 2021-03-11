const sal={
    a: "ljkhlkhlk",
    b: "llllll"
}

let persona = {
    nombre : "rij",
    edad :55 ,
    anda: () =>{
        console.log("brrrrm");
    }
}
console.log(persona.anda());

let {nombre} = persona;
nombre = "mmmm";



console.log(persona.nombre);
console.log(nombre);
