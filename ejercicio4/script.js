const pantalla = document.getElementById('pantalla');
const botonesNumero = document.querySelectorAll('.numero');
const botonesOperador = document.querySelectorAll('.operador');
const botonIgual = document.querySelector('.igual');
const botonClear = document.querySelector('.limpiar');

let operacionActual = '';

// Función para actualizar la pantalla
function actualizarPantalla() {
    pantalla.value = operacionActual;
}

// Manejar clic en botones numéricos
botonesNumero.forEach(boton => {
    boton.addEventListener('click', () => {    
        boton.classList.add('presionado');
        setTimeout(() => boton.classList.remove('presionado'), 100);
        operacionActual += boton.textContent;
        actualizarPantalla();
    });
});

// Manejar clic en botones de operador
botonesOperador.forEach(boton => {
    boton.addEventListener('click', () => {
        boton.classList.add('presionado');
        setTimeout(() => boton.classList.remove('presionado'), 100);
        if (operacionActual) {
            operacionActual += boton.textContent;
            actualizarPantalla();
        }
    });
});

// Manejar clic en el botón igual
botonIgual.addEventListener('click', calcularResultado);

botonClear.addEventListener('click', () => {
    operacionActual='';
    actualizarPantalla();
});

// Función para calcular el resultado
function calcularResultado() {
    const resultado = eval(operacionActual);
    operacionActual = resultado;
    pantalla.value = resultado;    
}
