// Sintaxis de una callback
// En JS podemos pasar funciones como argumento de otra función

const setMensaje = (nombre, callbackMensaje) => {
    callbackMensaje(nombre); // invocará la callback con el parámetro "nombre"
}



setMensaje('Laura', (nombre) => {
    console.log('Hola ' + nombre);
})

setMensaje('Laura', (nombre) => {
    console.log('Hello ' + nombre);
})

// Manejo de asincronía con callbacks en JS

// Ejemplo de función que  su ejecución es asíncrona (simulamos)

const cuentaAtras = (segundos, callbackMostrarSegundos) => {
    let timer = setInterval(() => { // Usamos setInterval para simular asincronía
        let error;
        if(typeof segundos !== 'number') {
            error = 'El primer argumento debe ser numérico';
            clearInterval(timer);
        }
        callbackMostrarSegundos(segundos, error);
        segundos--;
        if (segundos === 0) {
            clearInterval(timer);
        }
    }, 1000)
}

// Invocamos la función de cuenta atrás y aquí es donde definimos la callback

cuentaAtras('hola', (seg, err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('Quedan ' + seg + ' segundos');
    }
})














