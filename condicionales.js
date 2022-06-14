// let usuario = prompt("Ingrese usuario")
// let clave = prompt("Ingrese clave")

// let datos = document.getElementById("datos");

// if (usuario=="MMeza" && clave=="181") {
//     datos.innerHTML="Ususario y clave correctos";
// }else {
//     datos.innerHTML="Ususario y clave incorrectos";
// }

// let pais = prompt("Ingrese pais")
// let datos = document.getElementById("datos");

// switch (pais){
//     case "Peru":
//         datos.innerHTML = "Pais: " + " " + pais;
//         break;
//     case"Brasil":
//         datos.innerHTML = "Pais: " + " " + pais;
//         break;
//     default:
//         datos.innerHTML = "Pais incorrecto";
//         break;   
// }

let pais = prompt("Ingrese pais")
let genero = prompt("Ingrese genero")
let datos = document.getElementById("datos");

switch(pais){
    case "Peru":
        switch (genero){
            case "masculino":
                datos.innerHTML="Pais" + " " + pais + "Genero" + " " + genero;
                break;
               
            case "femenino":
                datos.innerHTML="Pais" + " " + pais + "Genero" + " " + genero;
                break;
            }
        
    case "Brasil": 
        switch (genero) {
            case "masculino":
                datos.innerHTML="Pais" + " " + pais + "Genero" + " " + genero;
                break;
            
            case "femenino":
                datos.innerHTML="Pais" + " " + pais + "Genero" + " " + genero;
                break;
            }

    default:
    datos.innerHTML = "Pais incorrecto";
    break;        

}