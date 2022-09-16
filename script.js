let edadUsuario = prompt("Para ingresar a nuestra plataforma debe ser mayor de edad. \nPorfavor ingrese su edad:" );


while(edadUsuario == "" ){
    edadUsuario = prompt(`Debe ingresar su edad para poder avanzar`);
}



if(edadUsuario >= 18 ){
    alert(`Bienvenido a nuestra plataforma`);
    nombreUsuario = prompt(`Porfavor ingrese su nombre completo.`);
    documentoUsuario = prompt(`ingrese su numero de documento.`); 
    zona = prompt(`Elija la ubicacion que desea para su evento \n platea1, platea2, platea3, vip: `).toLowerCase();
}else{
    alert(`No estas en edad para ingresar`);
}


class BoletaUsuario{
    constructor(nombre, documento, zona){
        this.nombre = nombre;
        this.documento = documento;
        this.zona = zona;
            
        }
        precioEntrada(){
            if(this.zona === "platea1"){
                return 6500 * 1.15 //Valor ticket service
            }else if(this.zona === "platea2"){
                return 4500 * 1.15 
            }else if(this.zona === "platea3"){
                return 7500 * 1.15 
            }else if(this.zona === "vip"){
                return 10500 * 1.15 
            }else{
                return alert(`el dato que ingreso es incorrecto`);
            } 
        }
      
    mensajeCliente(){
        alert(`${this.nombre}, escogiste la zona ${this.zona}, el precio que debes pagar por tu boleta, incluido el ticket service es: $${valorBoleta} pesos`);
    }
}

const cliente = new BoletaUsuario(nombreUsuario, documentoUsuario, zona);
const camilo = new BoletaUsuario("camilo lopez", "95631585", "platea1");
const luisa = new BoletaUsuario("luisa palomino", "95993698", "platea3");
const pedro = new BoletaUsuario("pedro blund", "90082571", "platea3");
const carlos = new BoletaUsuario("carlos zuñiga", "96350002", "platea1");
const karen = new BoletaUsuario("karen valverde", "95987031", "platea2");
const melissa = new BoletaUsuario("melissa betancourth", "95841542", "vip");
const angel = new BoletaUsuario("angel dimaria", "97856321", "vip");
const andres = new BoletaUsuario("andres herrera", "96205967", "platea2");

let baseDeDatos = [];
baseDeDatos.push(cliente);
baseDeDatos.push(camilo);
baseDeDatos.push(luisa);
baseDeDatos.push(pedro);
baseDeDatos.push(carlos);
baseDeDatos.push(karen);
baseDeDatos.push(melissa);
baseDeDatos.push(angel);
baseDeDatos.push(andres);


let valorBoleta; 

console.log(valorBoleta = cliente.precioEntrada().toFixed(0));
console.log(baseDeDatos);
cliente.mensajeCliente();

//Separo por grupos a las personas que compraron entrada para hacer una base de datos especifica con los datos y cantidades de compradores por zona.

let personasPlatea1 = baseDeDatos.filter(persona => persona.zona === "platea1");
console.log(personasPlatea1); 

let personasPlatea2 = baseDeDatos.filter(persona =>persona.zona === "platea2");
console.log(personasPlatea2);

let personasPlatea3 = baseDeDatos.filter(persona =>persona.zona === "platea3");
console.log(personasPlatea3);

let personasVip = baseDeDatos.filter(persona =>persona.zona === "vip");
console.log(personasVip);



