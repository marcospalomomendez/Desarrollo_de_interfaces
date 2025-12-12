let section2 = document.getElementById("section2");

let articulo = document.createElement("article");

let section3 = document.getElementById("section3");

let contenedor = document.getElementById("contenedor");

let titulo = "mi titulo desde js";
let texto = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, indeed.";
let img = "img/cristianoCalvo.jpg";


articulo.innerHTML = `
    <div class="titulo">
        <h1>${titulo}</h1>
    </div>
    <div class="texto">
        ${texto}
    </div>
    <div class="imagen">
        <img src="${img}" alt="">
    </div>
`;
articulo.className = "article2";
section2.appendChild(articulo);



fetch("productos.json")
    .then(response => response.json())
    .then(data => {
        data.productos.forEach(producto => {
            console.log("Producto: ", producto.nombre, " - Precio: ", producto.precio);
            contenedor.innerHTML += `
            <div class="card">
                <div class="titulo">
                    <h2>${producto.nombre}</h2>
                </div>
                <div class="imagen">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                </div>
                <div class="precio">
                    <p>Precio: ${producto.precio} €</p>
                </div>
                <div class="botones">
                    <button class="boton-comprar" id = "boton-${producto.id}">Comprar</button>
                </div>
            </div>
            `;
            section3.appendChild(contenedor);

        });//FIN DEL FOREACH

    })//FIN DEL THEN
    .catch(error => console.log("Error al cargar el archivo JSON: ", error));


