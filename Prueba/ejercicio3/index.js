const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const formulario = document.getElementById('formulario');



function validarFormulario() {

    let regaxNombre = /^[A-Za-z]+$/;
    let regaxEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let regaxFechaNacimiento = /^\d{4}-\d{2}-\d{2}$/;
    let regaxEdad = /^\d+$/;

    if (!regaxNombre.test(nombre.value)) {
        nombre.classList.add("is-invalid");
        nombre.classList.remove('is-valid');

    }else{
        nombre.classList.remove('is-invalid');
        nombre.classList.add('is-valid');
    }
    


}

nombre.addEventListener('change', validarFormulario);

formulario.addEventListener('submit', (e) => {

    e.preventDefault();

});
