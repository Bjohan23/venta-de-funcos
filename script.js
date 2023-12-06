let loadMoreBtn = document.querySelector('#load-more');
let currentItem= 8;

loadMoreBtn.onclick= ()=>{
    let boxes= [...document.querySelectorAll('.box-container .box')];
    for(var i= currentItem; i< currentItem +4; i++){
        boxes[i].style.display = 'inline-block';  
    }
    currentItem += 4;
    if(currentItem >= boxes.length){
        loadMoreBtn.style.display = 'none'
    }
}

// Carrito
let total = 0;
const totalElement = document.getElementById('total');
const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');


cargarEventListeners();

function cargarEventListeners() {
    elementos1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

}
vaciarCarritoBtn.addEventListener('click', function() {
    vaciarCarrito();
});

// Resto del código...

function comprarElemento(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento) {
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    };

    insertarCarrito(infoElemento);
}


function insertarCarrito(elemento) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${elemento.imagen}" width="100" height="150">
        </td>
        <td>
            ${elemento.titulo}
        </td>
        <td>
            ${elemento.precio}
        </td>
        <td>
            <a href="#" class="borrar" data-id="${elemento.id}">X</a>
        </td>
    `;
    lista.appendChild(row);
    // Actualizar el total
    const precioNumerico = parseFloat(elemento.precio.replace('S/', '').trim());
    total += precioNumerico;
    mostrarTotal();
}

function eliminarElemento(e) {
    e.preventDefault();
    if (e.target.classList.contains('borrar')) {
        const elemento = e.target.parentElement.parentElement;
        // Restar el precio del elemento eliminado del total
        const precioElemento = parseFloat(elemento.querySelector('td:nth-child(3)').textContent.replace('S/', '').trim());
        total -= precioElemento;
        elemento.remove();
        mostrarTotal();
    }
}
function vaciarCarrito() {
    console.log("Vaciar carrito");
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    // Reiniciar el total
    total = 0;
    mostrarTotal();
    return false;
}
function mostrarTotal() {
    // Mostrar el total en tu elemento HTML con el símbolo de soles
    totalElement.textContent = `S/${total.toFixed(2)}`;
}