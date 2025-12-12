const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const edad = document.getElementById('edad');
const dni = document.getElementById('dni');
const nie = document.getElementById('nie');
const politica = document.getElementById('politica');
const contenedorDNI = document.getElementById('contenedorDNI');
const contenedorNIE = document.getElementById('contenedorNIE');
const radioDNI = document.getElementById('radioDNI');
const radioNIE = document.getElementById('radioNIE');
//Ocultar contenedores de DNI y NIE al cargar la página
contenedorDNI.style.display = 'none';
contenedorNIE.style.display = 'none';
const contenedorInputs = document.getElementById('contenedorInputs');

addEventListener('change', mostrarInputDocumento);

function mostrarInputDocumento() {
if (radioDNI.checked) {
    contenedorInputs.style.display = 'grid';
    contenedorDNI.style.display = 'grid';
    contenedorInputs.style.gridTemplateAreas = "'nombre apellido' 'edad politica' 'opcion opcion' 'dni dni' ";
    nie.value = '';
}else{
    contenedorDNI.style.display = 'none';
}
if (radioNIE.checked) {
    contenedorInputs.style.display = 'grid';
    contenedorInputs.style.gridTemplateAreas = "'nombre apellido' 'edad politica' 'opcion opcion' 'nie nie'";
    contenedorNIE.style.display = 'grid';
    dni.value = '';
}else{
    contenedorNIE.style.display = 'none';
}
}