
let Dia = prompt("Ingresar Dia De la Semana")
let datos = document.getElementById ("Datos")

switch (Dia){
    case "Lunes":
           datos.innerHTML = " Dia de la semana" + " " + Dia;
           break ;

    case "Martes":
           datos.innerHTML = " Dia de la semana " + " " + Dia;
           break;

    case "Miercoles":
           datos.innerHTML = " Dia de la semana " + " " + Dia;
           break;

    case "Jueves":
          datos.innerHTML = " Dia de la semana " + " " + Dia;
           break;

    case "Viernes":
           datos.innerHTML = " Dia de la semana " + " " + Dia;
           break;

    case "Sabado":
           datos.innerHTML = " Dia de la semana " + " " + Dia;
           break;
           
    case "Domingo":
           datos.innerHTML = " Dia de la semana " + " " + Dia;
           break;
           

default : 
     datos.innerHTML = " Dia de la semana incorrecto";
       break;
}

