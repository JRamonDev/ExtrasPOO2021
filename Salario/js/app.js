class Persona{

    
    constructor(n,e,a,h,p,pa,ct,as){
        this.nombre = n;
        this.edad = e;
        this.apellido= a;
        this.horaTrabajada=h;
        this.pagoHora=p;
        this.pagoAnual=pa;
        this.cargoTrabajador=ct;
        this.asenso=as;
        this.salarioMensual;
        this.salasalarioquincenal;
        this.salariosemanal;
        this.salariodiario;
 

         }
    calculodesalario(){
        this.salarioMensual=this.pagoHora*this.horaTrabajada;
         this.salasalarioquincenal= this.salarioMensual/2;
        this.salariosemanal= this.salarioMensual/4;
        this.salariodiario= this.salarioMensual/30;

    }

    mensaje(){
            return "El nombre de la persona es: "+" "+ this.nombre 
            + " y su Apellido es: "+" "+ this.apellido 
            + ", su edad es: "+ this.edad 
            +". El Salario Mensual es de: " +" "+ this.salarioMensual 
            + ", el Salario Quincenal es de: "+" "+ this.salasalarioquincenal 
            +", el Salario Semanal es de: "+" "+ this.salariosemanal 
            + ", el Salario Diario es de: "+" "+ this.salariodiario;
            


            }
         
               
  
            

       
}


const nombre=prompt("Digitenos su Nombre.");
const apellido=prompt("Digitenos su Apellido.");
const edad=prompt("Digitenos su Edad.");
const horaTrabajada=prompt("Digitenos sus Horas Trabajadas.");
const pagoHora=prompt("Digitenos su Pago por Hora.");
const cargoTrabajador=prompt("Digitenos su Cargo.");
const asenso=prompt("¿Tiene Asenso Si o No?.");
const pagoAnual=prompt("¿Cual es su Pago Anual?.");

const Persona1 = new Persona(nombre,edad,apellido,horaTrabajada,pagoHora,pagoAnual,cargoTrabajador,asenso);
console.log(Persona1.mensaje());
console.log(Persona1.calculodesalario());
alert (Persona1.mensaje());
