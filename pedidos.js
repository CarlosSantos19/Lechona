// Función para guardar un nuevo pedido en el localStorage
function guardarPedido(nuevoPedido) {
    try {
        const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
        pedidos.push(nuevoPedido);
        localStorage.setItem('pedidos', JSON.stringify(pedidos));
    } catch (error) {
        console.error('Error al guardar el pedido:', error);
    }
}

// Función para obtener todos los pedidos almacenados del localStorage
function obtenerPedidos() {
    try {
        return JSON.parse(localStorage.getItem('pedidos')) || [];
    } catch (error) {
        console.error('Error al obtener los pedidos:', error);
        return [];
    }
}

// Función para mostrar los detalles del último pedido en la página de pago
function mostrarDetallesPedido() {
    try {
        const productDetails = JSON.parse(localStorage.getItem('lastProductDetails'));
        if (productDetails) {
            const productNameElement = document.getElementById("product-name");
            const productOptionElement = document.getElementById("product-option");
            const productPriceElement = document.getElementById("product-price");

            if (productNameElement && productOptionElement && productPriceElement) {
                productNameElement.textContent = productDetails.name;
                productOptionElement.textContent = productDetails.option;
                productPriceElement.textContent = "$" + productDetails.price.toFixed(2);
            } else {
                console.error('No se encontraron los elementos del DOM necesarios para mostrar los detalles del pedido.');
            }
        } else {
            console.error('No se encontraron detalles del pedido en localStorage.');
        }
    } catch (error) {
        console.error('Error al mostrar los detalles del pedido:', error);
    }
}

// Función para mostrar los detalles del cliente
function mostrarDetallesCliente(data) {
    try {
        const customerDetails = data || JSON.parse(localStorage.getItem('customerDetails'));
        if (customerDetails) {
            document.getElementById('customer-name').value = customerDetails.name;
            document.getElementById('customer-phone').value = customerDetails.phone;
            document.getElementById('customer-address').value = customerDetails.address;
        } else {
            console.error('No se encontraron detalles del cliente en localStorage.');
        }
    } catch (error) {
        console.error('Error al mostrar los detalles del cliente:', error);
    }
}

// Función para confirmar el pago y redirigir a la página de Nequi
function confirmPayment() {
    window.location.href = "https://transacciones.nequi.com/bdigital/login.jsp";
}

// Función para finalizar el pago y redirigir a la página de inicio
function finalizarPayment() {
    window.location.href = "index.html";
}

// Función para manejar el cambio de estado del pedido
function iniciarCambioEstado() {
    const startButton = document.getElementById("start-button");
    const statusContainers = document.getElementById("status-containers");
    const messageElement = document.getElementById("message");
    const statusIniciadoElement = document.getElementById("status-iniciado");
    const statusEnProcesoElement = document.getElementById("status-en-proceso");
    const statusFinalizadoElement = document.getElementById("status-finalizado");

    console.log({
        startButton,
        statusContainers,
        messageElement,
        statusIniciadoElement,
        statusEnProcesoElement,
        statusFinalizadoElement
    });

    if (startButton && statusContainers && messageElement && statusIniciadoElement && statusEnProcesoElement && statusFinalizadoElement) {
        startButton.classList.add("clicked");
        statusContainers.style.display = "block";

        setTimeout(() => {
            statusIniciadoElement.classList.remove("gris");
            statusIniciadoElement.classList.add("rojo");

            setTimeout(() => {
                statusIniciadoElement.classList.remove("rojo");
                statusEnProcesoElement.classList.remove("gris");
                statusEnProcesoElement.classList.add("amarillo");

                setTimeout(() => {
                    statusEnProcesoElement.classList.remove("amarillo");
                    statusFinalizadoElement.classList.remove("gris");
                    statusFinalizadoElement.classList.add("verde");

                    setTimeout(() => {
                        messageElement.textContent = "¡Su pedido está listo! Lo llevarán a su mesa.";
                    }, 60000 * 1);
                }, 60000 * 1);
            }, 60000 * 1);
        }, 60000 * 1);
    } else {
        console.error('No se encontraron los elementos del DOM necesarios para iniciar el cambio de estado.');
    }
}

// Agregar eventos a los botones
document.getElementById("confirm-button").addEventListener("click", confirmPayment);
document.getElementById("start-button").addEventListener("click", iniciarCambioEstado);

// Mostrar detalles del pedido y del cliente al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    mostrarDetallesPedido();
    mostrarDetallesCliente();
});

