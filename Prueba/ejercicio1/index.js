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
  if (regexEmail.test(emailInput.value) && regexPassword.test(passwordInput.value) && pdf && checkboxInput.checked) {
    btnEnviar.disabled = false;
  } else {
    btnEnviar.disabled = true;
  }
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
  formulario.reset();
  passwordInput.classList.remove("is-valid");
  emailInput.classList.remove("is-valid");
  archivoInput.classList.remove("is-valid");
  btnEnviar.disabled = true;
  eleccion.value = "white";
  cambiarColorFondo();
  console.log("Correo:", emailInput.value);
  console.log("Contraseña:", passwordInput.value);
});

