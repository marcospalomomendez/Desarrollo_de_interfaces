let formulario = document.getElementById("formulario");
let btnEnviar = document.getElementById("enviar");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let checkboxInput = document.getElementById("exampleCheck1");
let archivoInput = document.getElementById("archivo");
let eleccion = document.getElementById("eleccion");
let pdf = false;

// Función de validación
function validarFormulario() {
  let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  // Validar email
  if (!regexEmail.test(emailInput.value)) {
    emailInput.classList.add("is-invalid");
    emailInput.classList.remove("is-valid");
  } else {
    emailInput.classList.add("is-valid");
    emailInput.classList.remove("is-invalid");
  }

  // Validar contraseña
  if (!regexPassword.test(passwordInput.value)) {
    passwordInput.classList.add("is-invalid");
    passwordInput.classList.remove("is-valid");
  } else {
    passwordInput.classList.add("is-valid");
    passwordInput.classList.remove("is-invalid");
  }

  // Validar archivo PDF  
  if(archivoInput.files.length > 0 && archivoInput.files[0].type === "application/pdf"){
    archivoInput.classList.add("is-valid");
    archivoInput.classList.remove("is-invalid");
    pdf = true;
  } else {
    archivoInput.classList.add("is-invalid");
    archivoInput.classList.remove("is-valid");
    pdf = false;
  }

  // Habilitar o deshabilitar botón de enviar
  if (regexEmail.test(emailInput.value) && regexPassword.test(passwordInput.value) && pdf) {
    btnEnviar.disabled = false;
  } else {
    btnEnviar.disabled = true;
  }

  /*
    const checkboxDiv = checkboxInput.parentElement;

    // Mostrar u ocultar textarea según el estado del checkbox
    if (checkboxInput.checked) {
        if (!checkboxDiv.querySelector(".mensaje-condiciones")) {
            let textarea = document.createElement("textarea");
            textarea.placeholder = "Escribe tu experiencia...";
            textarea.classList.add("form-control", "mt-2", "mensaje-condiciones");
            textarea.rows = 3;

            checkboxDiv.insertAdjacentElement("afterend", textarea);
        }
    } else {
        // Borrar textarea si está desmarcado
        let mensajes = document.querySelectorAll(".mensaje-condiciones");
        mensajes.forEach(mensaje => mensaje.remove());
    }
    */
}


// Escuchar cambios
emailInput.addEventListener("input", validarFormulario);
passwordInput.addEventListener("input", validarFormulario);
archivoInput.addEventListener("change", validarFormulario);
eleccion.addEventListener("change", cambiarColorFondo);
checkboxInput.addEventListener("change", validarFormulario);

function cambiarColorFondo() {
    document.body.style.backgroundColor = eleccion.value;
}

formulario.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Formulario enviado correctamente");
  console.log("Correo:", emailInput.value);
  console.log("Contraseña:", passwordInput.value);
});

