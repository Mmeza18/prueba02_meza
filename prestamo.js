let nombres = prompt ("Ingrese su nombre:")
let apellidos = prompt ("Ingrese su apellido:")
let edad = prompt ("Ingrese su edad:") 
let monto = prompt ("Ingrese el monto del prestamo:") 
let cuotas = prompt ("Ingrese en cuantas cuotas que desea pagar:") 
let resultado  =parseInt(monto)  / parseInt(cuotas)
let datos = document.getElementById("Datos");

    
if (edad >17) {
        if (monto =="0" && cuotas=="0"){
                datos.innerHTML = "No se puede trabajar con valores nulos";
        }else{
                datos.innerHTML = "EL numero en cuotas son :" + cuotas + "<br/>" + "<br/>";
        
            }
        
            datos.innerHTML += " Nombres: " + nombres + " " + "  Apellidos:  " + " " + apellidos +" " + "  , Edad: " + " " +  edad + "  " +"  , Importe total del prestamo: " + monto + "  , N° de Cuota: " + cuotas + "<br/>" + "<br/>"; 
        for (let x = 1 ; x<=cuotas; x++){
                
                datos.innerHTML += "Cuota  " + "  " + x + ":  "  + resultado + "<br/>";
        }
            
}else {
        datos.innerHTML = "No se puede trabajar con un menor de edad";

}