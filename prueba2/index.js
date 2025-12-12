let formulario = document.getElementById("formulario");
let btnEnviar = document.getElementById("enviar");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let checkboxInput = document.getElementById("exampleCheck1");

console.log(formulario, emailInput,passwordInput, btnEnviar);

// Escuchar el evento de clic en el botón de enviar
btnEnviar.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(emailInput.value);
    console.log(passwordInput.value);

    if (passwordInput.value === "1234") {
        alert("Eres tonto");
        document.body.style.backgroundColor = "red";
    }else{
        document.body.style.backgroundColor = "green";
    }
    if (checkboxInput.checked) {
        let mensaje = document.createElement("h1");
        mensaje.innerText = "Aceptaste las condiciones";
        document.body.appendChild(mensaje);
    }
});