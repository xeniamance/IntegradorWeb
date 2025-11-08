document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const errorP = document.querySelector('.errorP');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        errorP.textContent = '';

        const nombre = form.nombre.value.trim(); //recupero los valores del formulario
        const email = form.email.value.trim(); //uso trim para eliminar espacios del inicio y el final
        const telefono = form.telefono.value.trim();
        let asunto = form.asunto.value.trim();
        const mensaje = form.mensaje.value.trim();

        
        const emailValido = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email); //validaciones con expresiones regulares
        const telValido = /^[0-9]{10}$/.test(telefono);

        let mensajeError = '';

        if (nombre === '' || mensaje === '' || email === '' || telefono === '') {
            mensajeError = 'Todos los campos obligatorios deben completarse.';
        } else if (!emailValido) {
            mensajeError = 'El email no tiene un formato válido.';
        } else if (!telValido) {
            mensajeError = 'El teléfono debe tener 10 números.';
        }

        if (asunto === '') {
            asunto = "Sin asunto";
        }

        if (mensajeError !== '') {
            errorP.textContent = mensajeError;
        } else {
            
            const datos = document.createElement('div'); //creo los elementos html para mostrar lo que se envio
            const titulo = document.createElement('h3');
            titulo.textContent = 'Datos enviados:';

            const mensajeFinal = document.createElement('p');
            mensajeFinal.innerHTML = `${nombre} con email: ${email} y teléfono: ${telefono}. <br>
                Envió el asunto: ${asunto} y el mensaje: ${mensaje}`;

            datos.appendChild(titulo);
            datos.appendChild(mensajeFinal);
            document.body.appendChild(datos);

            form.reset();
        }
    });
});