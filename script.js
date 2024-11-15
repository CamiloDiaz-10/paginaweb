// Selección de elementos
const productos = document.querySelectorAll('.producto');
const carrito = document.getElementById('productos-en-carrito');
const totalDisplay = document.getElementById('total');
const botonComprar = document.getElementById('comprar');

// Inicializamos el carrito
let carritoCompras = [];

// Función para actualizar el carrito
function actualizarCarrito() {
    // Limpiamos el carrito actual
    carrito.innerHTML = '';

    // Recorremos los productos del carrito
    let total = 0;
    carritoCompras.forEach(producto => {
        const itemCarrito = document.createElement('li');
        itemCarrito.textContent = `${producto.nombre} - $${producto.precio}`;
        carrito.appendChild(itemCarrito);
        total += producto.precio;
    });

    // Actualizamos el total
    totalDisplay.textContent = total;
}

// Función para agregar productos al carrito
function agregarAlCarrito(event) {
    const productoElement = event.target.closest('.producto');
    const id = productoElement.getAttribute('data-id');
    const nombre = productoElement.getAttribute('data-nombre');
    const precio = parseFloat(productoElement.getAttribute('data-precio'));

    // Añadimos el producto al carrito
    carritoCompras.push({ id, nombre, precio });

    // Actualizamos el carrito
    actualizarCarrito();
}

// Función para realizar la compra
function realizarCompra() {
    if (carritoCompras.length === 0) {
        alert("El carrito está vacío.");
    } else {
        alert("¡Compra realizada con éxito!");
        carritoCompras = [];  // Limpiar el carrito después de la compra
        actualizarCarrito();
    }
}

// Agregar el evento 'click' a cada botón de "Agregar al Carrito"
productos.forEach(producto => {
    const boton = producto.querySelector('.add-to-cart');
    boton.addEventListener('click', agregarAlCarrito);
});

// Evento para realizar la compra
botonComprar.addEventListener('click', realizarCompra);
