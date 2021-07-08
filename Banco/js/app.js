class Persona{
    constructor(nombre, cedula, monto){
        this.Nombre= nombre;
        this.Cedula = cedula;
        this.Monto= monto;
    }


}

var resultados;
var D_Ini = document.getElementById("D_Ini");
var D_Fin = document.getElementById("D_Fin");
var inni2, fin2;
inni2=D_Ini.value;
fin2=D_Fin.value;
var Nombre = document.getElementById("Nombre").value;
var Cedula = document.getElementById("Cedula").value;
var Monto = document.getElementById("Monto").value;
let Persona1 = new Persona("#Respuesta");
if(inni2=== "Banpro" && fin2 === "CPD"){
   resultados= Monto / 8;
      document.getElementById("Respuesta").innerHTML= "El Señor Con Nombre: "+ Nombre + "Con Cedula : " + Cedula + "Eligio Una Cuenta CPD con un Interes de: "+ resultados; 
    }
