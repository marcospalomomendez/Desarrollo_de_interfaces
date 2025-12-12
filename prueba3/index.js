
let colorFondo = document.getElementById("fondo");
let password = document.getElementById("password");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let btnEnviar = document.getElementById("enviar");
let formulario = document.getElementById("formulario");

// NUEVOS CAMPOS
let dni = document.getElementById("dni");
let nie = document.getElementById("nie");

// Regex


// Eventos para cambiar color de fondo
colorFondo.addEventListener("change", cambiarColorFondo);

// Eventos de validación de campos existentes
password.addEventListener("input", validarFormulario);
nombre.addEventListener("input", validarFormulario);
apellido.addEventListener("input", validarFormulario);

// Eventos para DNI/NIE
dni.addEventListener("input", () => {
    if (dni.value.length > 0) {
        nie.disabled = true; // bloquea NIE si se escribe en DNI
    } else {
        nie.disabled = false;
    }
        validarFormulario();
});

nie.addEventListener("input", () => {
    if (nie.value.length > 0) {
        dni.disabled = true
    } else {
        dni.disabled = false;
    }
    validarFormulario();
});



// Función de validación original (sin tocar)
function validarFormulario() {
    let regexPassword = /^.{8,20}$/;
    let regexNombre = /^.{3,20}$/;
    let regexApellido= /^.{3,20} .{3,20}$/;
    let regexDNI = /^\d{8}[A-Za-z]$/;
    let regexNIE = /^[XYZ]\d{7}[A-Za-z]$/;

    if (dni.value.length > 0) {
        if (!regexDNI.test(dni.value)) {
            dni.classList.add("is-invalid");
            dni.classList.remove("is-valid");
        } else {
            dni.classList.add("is-valid");
            dni.classList.remove("is-invalid");
        }
    } else {
        dni.classList.remove("is-valid", "is-invalid");
    }

    if (nie.value.length > 0) {
        if (!regexNIE.test(nie.value)) {
            nie.classList.add("is-invalid");
            nie.classList.remove("is-valid");
        } else {
            nie.classList.add("is-valid");
            nie.classList.remove("is-invalid");
        }
    } else {
        nie.classList.remove("is-valid", "is-invalid");
    }

    if(!regexPassword.test(password.value)){
        password.classList.add("is-invalid")
        password.classList.remove("is-valid")
    }else{
        password.classList.add("is-valid")
        password.classList.remove("is-invalid")
    }
    
    if(!regexNombre.test(nombre.value)){
        nombre.classList.add("is-invalid")
        nombre.classList.remove("is-valid")
    }else{
        nombre.classList.add("is-valid")
        nombre.classList.remove("is-invalid")
    }
    
    if(!regexApellido.test(apellido.value)){
        apellido.classList.add("is-invalid")
        apellido.classList.remove("is-valid")
    }else{
        apellido.classList.add("is-valid")
        apellido.classList.remove("is-invalid")
    }

    // Habilitar/deshabilitar botón
    if(
        regexNombre.test(nombre.value) &&
        regexApellido.test(apellido.value) &&
        regexPassword.test(password.value) &&
        (regexDNI.test(dni.value) || regexNIE.test(nie.value) || (dni.value === "" && nie.value === ""))
    ){
        btnEnviar.disabled = false;
    }else{
        btnEnviar.disabled = true;
    }
}

// Cambiar color de fondo
function cambiarColorFondo(){
    document.body.style.backgroundColor = colorFondo.value;
}

// Evento submit
formulario.addEventListener("submit", (e) =>{
    e.preventDefault();
    alert("Revisa los datos guardados en la consola");
    console.log("[Nombre:" + nombre.value + ", Apellidos:" + apellido.value + ", Contraseña:" + password.value +
        ", DNI:" + dni.value + ", NIE:" + nie.value + "]");

    formulario.reset();
    nombre.classList.remove("is-valid");
    apellido.classList.remove("is-valid");
    password.classList.remove("is-valid");
    dni.classList.remove("is-valid");
    nie.classList.remove("is-valid");
    btnEnviar.disabled = true;
    dni.disabled = false;
    nie.disabled = false;

    document.body.style.backgroundColor = colorFondo.value;
});
