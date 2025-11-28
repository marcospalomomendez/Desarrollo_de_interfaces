console.log("Index JS cargado");


let passwordInput = document.getElementById('password');
let passwordConfirmarInput = document.getElementById('password-confirmar');
let form = document.querySelector('form');
let boton = document.getElementById('boton');
let formulario = document.getElementById('formulario');

passwordInput.addEventListener("change", () =>{
    if(passwordConfirmarInput.value != ""){
        if(passwordInput.value != passwordConfirmarInput.value){
            passwordConfirmarInput.classList.add("is-invalid");
            passwordInput.classList.add("is-invalid");            
            boton.disabled = true;
        }else{
            passwordConfirmarInput.classList.remove("is-invalid");
            passwordInput.classList.remove("is-invalid");
            boton.disabled = false;
        }
    }
})
passwordConfirmarInput.addEventListener("change", () =>{
    if(passwordInput.value != ""){
        if(passwordInput.value != passwordConfirmarInput.value){
            passwordConfirmarInput.classList.add("is-invalid");
            passwordInput.classList.add("is-invalid");
            boton.disabled = true;
        }else{
            passwordConfirmarInput.classList.remove("is-invalid");
            passwordInput.classList.remove("is-invalid");
            boton.disabled = false;
        }
    }
})


formulario.addEventListener("submit", (e) =>{
    e.preventDefault();
    alert("Formulario enviado correctamente revise los datos en la consola");
    console.log(
        "[Nombre: " + document.getElementById("nombre").value +
        ", Apellidos: " + document.getElementById("apellido").value +
        ", DNI: " + document.getElementById("dni").value +
        ", NIE: " + document.getElementById("nie").value +
        ", Fecha de nacimiento: " + document.getElementById("fecha-nacimiento").value +
        ", Teléfono: " + document.getElementById("num-telefono").value +
        ", Email: " + document.getElementById("email").value +
        ", Domicilio: " + document.getElementById("domicilio").value +
        ", Localidad: " + document.getElementById("localidad").value +
        ", Código Postal: " + document.getElementById("codigo-postal").value +
        ", Curso: " + document.querySelector('select').value +
        ", Password: " + document.getElementById("password").value +
        "]"
    );
    formulario.reset();


});

