window.onload = function() {
  // Función para guardar un nuevo pedido en el localStorage
  function guardarPedido(nuevoPedido) {
      // Obtener todos los pedidos almacenados (si existen)
      var pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
      
      // Agregar el nuevo pedido al array de pedidos
      pedidos.push(nuevoPedido);
      
      // Guardar el array de pedidos actualizado en el localStorage
      localStorage.setItem('pedidos', JSON.stringify(pedidos));
  }

  // Función para obtener todos los pedidos almacenados del localStorage
  function obtenerPedidos() {
      // Obtener todos los pedidos almacenados (si existen)
      var pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
      
      return pedidos;
  }

  // Obtener los detalles del último pedido almacenados en localStorage
  var productDetails = JSON.parse(localStorage.getItem('lastProductDetails'));

  // Verificar si hay detalles de pedido almacenados
  if (productDetails) {
      // Mostrar los detalles del pedido en la página de pago
      document.getElementById("product-name").textContent = productDetails.name;
      document.getElementById("product-option").textContent = productDetails.option;
      document.getElementById("product-price").textContent = "$" + productDetails.price.toFixed(2);
  } else {
      // Si no hay detalles de pedido, mostrar un mensaje de error
      console.error('No se encontraron detalles del pedido en localStorage.');
  }

  function confirmPayment() {
      // Aquí puedes agregar cualquier lógica adicional antes de redirigir, si es necesario
      window.location.href = "https://transacciones.nequi.com/bdigital/login.jsp";
  }
  
  document.getElementById("confirm-button").addEventListener("click", confirmPayment);

  function finalizarPayment() {
      // Aquí puedes agregar cualquier lógica adicional antes de redirigir, si es necesario
      window.location.href = "index.html";
  }
  
  document.getElementById("finalizar-button").addEventListener("click", finalizarPayment);
}
document.getElementById('customer-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  const customerDetails = { name, phone, address };
  localStorage.setItem('customerDetails', JSON.stringify(customerDetails));
  window.location.href = 'pedidos.html'; // Redirige a la segunda página
});

