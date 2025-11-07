let formulario = document.getElementById("formulario");
let btnCambio = document.getElementById("boton_enviado");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    let colorSin = document.getElementById("nombre").value;
    let color = colorSin.toLowerCase();
    if(CSS.supports("background-color", color) === false){
        alert("El color ingresado no es válido. Por favor, ingrese un color CSS válido.");
        return;
    }else{
        formulario.style.backgroundColor = color;
    }
});