document.getElementById('email').addEventListener('input', function() {
    campo = event.target;
    valido = document.getElementById('emailVerificar');
        
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (emailRegex.test(campo.value)) {
      valido.innerText = "Este correo es válido";
    } else {
      valido.innerText = "Este correo es incorrecto";
    }
});