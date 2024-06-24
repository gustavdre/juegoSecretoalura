let numeroSecreto;
let numeroIntentos;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
function asignacion(elemento, texto) {
    let elementos = document.querySelector (elemento);
    elementos.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroSeleccionado = parseInt(document.getElementById("valorUsuario").value);

    if (numeroSeleccionado === numeroSecreto) {
        asignacion("p", `Acertaste el número en ${numeroIntentos} ${numeroIntentos === 1 ? "intento" : "intentos"} `);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numeroSeleccionado > numeroSecreto) {
            asignacion("p", "El número secreto es menor");
        } else {
            asignacion("p", "El número secreto es mayor");
        }
        numeroIntentos++;
        limpiarcaja();
    }
    return;
}

function limpiarcaja() {
    document.querySelector("#valorUsuario").value = "";
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor (Math.random() * numeroMaximo) + 1;
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignacion("p", "Ya se sotearon todos los números posibles");
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
       
}

function condicionesIniciales() {
    asignacion ("h1", "Juego del número secreto");
    asignacion ("p", `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    numeroIntentos = 1;
}

function reiniciarJuego() {
    limpiarcaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();