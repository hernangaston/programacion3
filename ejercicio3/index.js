/*CREAMOS VALORES CONSTANTES QUE VAN A SER CADA UNO DE 
LOS ELEMENTOS DE DOM CON LOS QUE VAMOS A INTERACTUAR*/


const valor1 = document.getElementById('valor1');
const valor2 = document.getElementById('valor2');
const sumar = document.getElementById('sumar');
const restar = document.getElementById('restar');
const limpiar = document.getElementById('limpiar');
const resultado = document.getElementById('resultado');

/* AL ELEMENTO DEL DOM EN ESTE CASO LOS BOTONES, LES VAMOS A ASIGNAR UN EVENTO (EN ESTE CASO CLICK)
PARA PODER REALIZAR LA OPERACION REQUERIDA SUMAR, RESTAR O LIMPIAR LOS CAMPOS DEL FORMULARIO */

/* AL EVENTO CLICK LE PASAMOS UNA ARROW FUNCTION QUE ASIGNA EL RESULTADO DE LA OPERACION
AL ELEMENTO DEL DOM CON ID RESULTADO ASIGNADO EN LA CONSTANTE RESULTADO */

sumar.addEventListener('click', () => {
	/*validamos que los valores de los campos sean numericos se podria crear una funcion validar 
	pero para el caso no es tan necesario*/
	if(!valor1.value || !valor2.value){
		alert("Debe ingresar valores numéricos");
	}else{
		const resultadoSuma = parseFloat(valor1.value) + parseFloat(valor2.value);
		if (resultadoSuma > 0){
			resultado.classList.remove('rojo');
    		resultado.classList.add('verde');
    	}else{
    		resultado.classList.remove('verde')
    		resultado.classList.add('rojo')
    	}
		resultado.textContent = `Resultado: ${resultadoSuma}`;
    }
});

restar.addEventListener('click', () => {
	/*validamos que los valores de los campos sean numericos*/
	if(!valor1.value || !valor2.value){
		alert("Debe ingresar valores numéricos");
	}else{
    	const resultadoResta = parseFloat(valor1.value) - parseFloat(valor2.value);
    	if (resultadoResta > 0){
    		resultado.classList.remove('rojo');
    		resultado.classList.add('verde');
    	}else{
    		resultado.classList.remove('verde')
    		resultado.classList.add('rojo')
    	}
    	resultado.textContent = `Resultado: ${resultadoResta}`;
	}
});

limpiar.addEventListener('click', () => {
    valor1.value = '';
    valor2.value = '';
    resultado.classList.remove('rojo');
    resultado.classList.remove('verde');
    resultado.textContent = 'Resultado: 0';
});