// Mostar ventana emergente,
// alert('Hola mundo');

//Variables
var nombre = "Gloria Raquel Leyva Jerez";
var altura = 80;

//Mostrar un valor de variable en la página
//Esta función incluye el nombre en el HTML
document.write(nombre);

//Concatenar variable == Java
var concatenacion = nombre + " " + altura;
document.write(concatenacion);
document.write(nombre + " " + altura);

/**
 //Pero .write es poco óptima es más recomendable usar:
 //Esta función getElementById trae el componente y con
 //innerHTML se le añade sitaxis HTML
 var datos = document.getElementById("datos");
 datos.innerHTML = concatenacion;

 //Si en el HTML la llamada a main.js (script) está en el head de la pag,
 //sucede que ese id "datos" no existe todavía y por eso en principio no se muestra
 //cambiarlo de lugar al final del body

 //Usando los templates de string (``) se puede poner una caja con HTML
 datos.innerHTML = `
 <h1>Hola soy la caja de datos</h1>
 <h2>Mi nombre es: ${nombre}</h2>
 <h3>Mido: ${altura} cm</h3>
 `;

 //Estrucutra de control - if
 if (altura >= 190){
    datos.innerHTML += '<h1>Eres una persona ALTA</h1>'
}
 else
 datos.innerHTML += '<h1>Eres una persona BAJA</h1>'

 //Estrucutra de control - bucle
 for (var i = 2015; i < 2020 ; i++) {
    datos.innerHTML += "<h2> Estamos en el año " + i;
}
 */

/**
 //Funciones
 function muestraMiNombre(nombre, altura) {
    var datos = document.getElementById("datos");
    datos.innerHTML = `
    <h1>Hola soy la caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura} cm</h3>
`;
}

 //Invocar la función == Java
 muestraMiNombre("Gloria", 157);
 **/


//Otra forma de invocar funciones
function muestraMiNombre(nombre, altura) {
    var misDatos = `
    <h1>Hola soy la caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura} cm</h3>
`;
    return misDatos;
}

//Invocar función
function imprimir(){
    var datos = document.getElementById("datos")
    datos.innerHTML = muestraMiNombre("Gloria", 157);
}

//Invocar función
imprimir();

//Variables que almacenan múltiples valores Array de Java
var nombres = ['Gloria', 'Raquel', 'Maria', 'Osmel'];
alert(nombres[1]);

document.write('<h1>Listado de nombres: </h1>');
for (var i = 0; i < nombres.length; i++) {
    //y se le puede concatenar HTML
    document.write(nombres[i] + '</br>' );
}

document.write('<h1>Listado de nombres de otra forma: </h1>');
//Recorrer con funciones anónimas
//Esta es una función que se ejecuta dentro de otra
nombres.forEach(function (nombre) {
    document.write(nombre + '</br>')
});

//Recorrer con otra sintaxis (flechas =>)
document.write('<h1>Listado de nombres de otra forma: </h1>');
nombres.forEach((nombre) =>{
    document.write(nombre + '</br>')
});