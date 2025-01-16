let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } 
    else {
        //El usuario no acertó.
        numeroDeUsuario > numeroSecreto ? asignarTextoElemento('p','El número secreto es menor') : asignarTextoElemento('p','El número secreto es mayor');
    
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {

            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function main() {
    asignarTextoElemento('h1','Juego de la chica sexy');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    main();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

main();
/*
function verificar(a,b){
    rango = a.length > b.length ? a.length : b.length;
    if(a.length < rango){
        for(let i = a.length; i < rango; i++){
            a.push(0);
        }
    }else{
        for(let i = b.length; i < rango; i++){
            b.push(0);
        }
    }
}
function sumaListas(primeraLista , segundaLista) {
    let resultado = [];

    let rango = primeraLista.length > segundaLista.length ? primeraLista.length : segundaLista.length;
    verificar(primeraLista,segundaLista);
    for (let i = 0; i <rango; i++) {
        
        resultado.push(primeraLista[i] + segundaLista[i]);
    }
    return resultado;

}
function cuadrado(lista){
    for(i=0;i<lista.length;i++){
        lista[i] = lista[i]*lista[i];
    }
    console.log(lista);
}
*/