$(function () {
  let $formulario = $("#formulario");
  if ($formulario.length) {
    $formulario.validate({
      rules: {
        nombre : {
          required: true
        },
        email: {
          required: true,
          customEmail: true
        },
        genero: {
          required: true
        },
        nacimiento: {
          required: true
        },
        apellido: {
          required: true
        }
      },
      messages: {
        nombre: {
          required: "El nombre es obligatorio"
        },
        email: {
          required: "Por favor ingresa un correo electrónico",
          email: "Por favor ingresa un email válido"
        },
        genero: {
          required: "Ingresa un género"
        },
        nacimiento: {
          required: "Ingresa tu fecha de nacimiento"
        },
        apellido: {
          required: "Ingresa tu apellido"
        }
      }
    })
  }
})