export function validarForm () {
// Selectores y variables.
    const inputNombre = document.querySelector('#nombre');
    const inputEmail = document.querySelector('#email');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#form');
    const btnSubmit = document.querySelector('#form button[type="submit"]')
    const btnReset = document.querySelector('#form button[type="reset"]')
// Objeto Email.
    const email = {
        nombre: '',
        email: '',
        mensaje: '',
    }
// Eventos.
    inputNombre.addEventListener('input',validar);
    inputEmail.addEventListener('input',validar);
    inputMensaje.addEventListener('input',validar);
    inputNombre.addEventListener('blur',validar);
    inputEmail.addEventListener('blur',validar);
    inputMensaje.addEventListener('blur',validar);

    btnReset.addEventListener('click', e => {
        e.preventDefault();

// Reiniciar objeto.
        nombre.nombre = '',
        email.email = '',
        mensaje.mensaje = ''

        formulario.reset();
        comprobarEmail();
    })
// Funciones.
    function validar (e) {
        if (e.target.value.trim() === ''){
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`,e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }

        if (e.target.value.trim().length < 3){
            mostrarAlerta(`El campo ${e.target.id} no es valido`,e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }

        if (e.target.id === 'email' && !validarEmail(e.target.value)){
            mostrarAlerta('Email no valido',e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }

        limpiarAlerta(e.target.parentElement);

// Asignar valores.

        email[e.target.name] = e.target.value.trim().toLowerCase();

// Comprobar el objeto email.

        comprobarEmail();
    }

    function mostrarAlerta (mensaje,referencia) {
        limpiarAlerta(referencia);

        const error = document.createElement('P');
        error.textContent = `*${mensaje}*`;
        error.style.fontSize = '1.4rem';
        error.style.color = 'red';
        error.style.textTransform = 'uppercase';
        error.style.padding = '1rem';
        error.style.borderRadius = '.5rem';
        error.style.textAlign = 'center';
        
// Renderizar el error al html.
        
        referencia.appendChild(error);
        setTimeout(() => {
            if (error.parentElement === referencia) { // Verifica si el error sigue en el DOM
                referencia.removeChild(error);
            }
        }, 5000);
    }

    function limpiarAlerta (referencia) {
// Comprobar si ya existe una alerta.
        const alerta = referencia.querySelector('P')
            if(alerta){
                alerta.remove();
            }
    }

    function validarEmail (email) {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
        const resultado = regex.test(email);
        return resultado;
    }

    function comprobarEmail () {
        if (Object.values(email).includes('')){
            btnSubmit.disabled = true;
        }else{
            btnSubmit.disabled = false;
        }
    }
}