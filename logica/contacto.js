document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const errorP = document.querySelector('.errorP');
    const datosEnviadosDiv = document.querySelector('.datosEnviadosDiv');
    const datosEnviadosH3 = document.querySelector('.datosEnviadosH3');
    const datosEnviadosUl = document.querySelector('.datosEnviadosUl');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        errorP.textContent = '';

        const nombre = form.nombre.value.trim(); //uso trim para sacar espacios al inicio y final
        const email = form.email.value.trim();
        const telefono = form.telefono.value.trim();
        const asunto = form.asunto.value.trim();
        const mensaje = form.mensaje.value.trim();

        //expresiones regulares
        const nombreValido =/^[a-zA-Z\s]{1,40}$/.test(nombre); //solo letras y espacios, max 40 caracteres
        const emailValido = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email); //formato de email
        const telValido = /^[0-9]{10}$/.test(telefono); //telefono de 10 digitos y de numeros

        let mensajeError = '';
        if (nombre === '' || mensaje === '' || email === '' || telefono === '') {
            mensajeError = 'Todos los campos obligatorios deben completarse.';
        } else if (!emailValido) {
            mensajeError = 'El email no tiene un formato válido.';
        } else if (!telValido) {
            mensajeError = 'El teléfono debe tener números y 10 dígitos.';
        } else if (!nombreValido) {
            mensajeError = 'El nombre solo debe contener letras y espacios, con un máximo de 40 caracteres.';
        }
        if (mensajeError !== '') {
            errorP.textContent = mensajeError;
        } else {
            datosEnviadosH3.textContent = 'Datos enviados:';
            if (asunto === '') { //si no se ingresa asunto
                datosEnviadosUl.innerHTML = `
                <li><b>Nombre:</b> ${nombre}</li>
                <li><b>Email:</b> ${email}</li>
                <li><b>Teléfono:</b> ${telefono}</li>
                <li><b>Asunto:</b> Sin asunto</li>
                <li><b>Mensaje:</b> ${mensaje}</li>
            `;
            } else { //si se ingresa asunto
            datosEnviadosUl.innerHTML = `
                <li><b>Nombre:</b> ${nombre}</li>
                <li><b>Email:</b> ${email}</li>
                <li><b>Teléfono:</b> ${telefono}</li>
                <li><b>Asunto:</b> ${asunto}</li>
                <li><b>Mensaje:</b> ${mensaje}</li>
            `;
            }
            datosEnviadosDiv.classList.add('datosEnviadosDivFinal');
            datosEnviadosH3.classList.add('datosEnviadosH3Final');
            datosEnviadosUl.classList.add('datosEnviadosUlFinal');
            datosEnviadosDiv.appendChild(datosEnviadosH3);
            datosEnviadosDiv.appendChild(datosEnviadosUl);
            document.body.appendChild(datosEnviadosDiv);
            form.reset(); //limpio el formulario
        }
    });
});