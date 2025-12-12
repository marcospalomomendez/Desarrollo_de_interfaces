const pass1 = document.getElementById("password")

const pass2 = document.getElementById("password-confirmar")

const boton = document.getElementById("boton")

const formulario = document.getElementById("formulario");

let llavePrivacidad = true;


pass1.addEventListener("change", ()=>{

    console.log(pass1.value, pass2.value)

    if(pass2.value != ""){

        if(pass1.value != pass2.value){
            boton.disabled = true;


            alert("contraseña no son iguales")

        }else{
            boton.disabled = false;
        }

    }
})


pass2.addEventListener("change", ()=>{

    console.log(pass1.value, pass2.value)
    if(pass1.value != ""){

        if(pass1.value != pass2.value){
            boton.disabled = true;
            alert("contraseña no son iguales")

        }else{
            boton.disabled = false;
        }


    }
})

/*

let password=document.getElementById("password");
let passwordConfirmar=document.getElementById("password-confirmar");
let botonEnviar=document.getElementById("boton");
let checkbox=document.getElementById("privacidad");
let dni = document.getElementById("dni");
let nie = document.getElementById("nie");
let opciones = document.getElementById("opciones");

passwordConfirmar.addEventListener("change",validar);
password.addEventListener("change",validar);
checkbox.addEventListener("change",validar);
opciones.addEventListener("change",validar);
dni.addEventListener("input", () => {
    if (dni.value.length > 0) {
        nie.disabled = true;
    } else {
        nie.disabled = false;
    }
        validar();
});

nie.addEventListener("input", () => {
    if (nie.value.length > 0) {
        dni.disabled = true
    } else {
        dni.disabled = false;
    }
    validar();
});


alert("Hola Mundo");

function validar(){
    if(password.value !== passwordConfirmar.value && passwordConfirmar.value.length > 0){
        passwordConfirmar.classList.add("is-invalid");
    } else {
        passwordConfirmar.classList.remove("is-invalid");
    }

    if (password.value !== passwordConfirmar.value || !checkbox.checked || opciones.value==="Default") {
        botonEnviar.disabled = true;
    } else {
        botonEnviar.disabled = false;
    }
}
    */
