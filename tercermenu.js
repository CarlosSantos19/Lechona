function toggleIngredients(product, modalId, productContainerId) {
    var modal = document.getElementById(modalId);
    modal.style.display = 'flex';

    var productInfo = document.getElementById('product-info');
    var productImage = document.getElementById('product-image');

    // Obtener el elemento del menú correspondiente al producto
    var productItem = document.querySelector('.menu-item[data-product="' + product + '"]');
    
    if (productItem) { // Verificar si se encontró un elemento del menú
        var productData = productItem.getAttribute('data-product');
        var productImgSrc = productItem.querySelector('img').getAttribute('src');
        
        // Establecer el texto y la imagen del producto en el modal
        productInfo.textContent = productData;
        productImage.setAttribute('src', productImgSrc);

        // Ocultar todos los contenedores de productos
        var allProductContainers = document.querySelectorAll('.ingredients-content');
        allProductContainers.forEach(function(container) {
            container.style.display = 'none';
        });

        // Mostrar el contenedor correspondiente según el producto
        var productContainer = document.getElementById(productContainerId);
        productContainer.style.display = 'flex';
    }
}

function closeIngredients(modalId, productName, checklistName, checklistPrice) {
    var modal = document.getElementById(modalId);
    if (modal) {
        // Ocultar el modal
        modal.style.display = 'none';

        // Mostrar los detalles del producto seleccionado
        var productImageSrc = modal.querySelector('.product-image-modal-' +  modalId.slice(-1)).getAttribute('src');
        var selectedProductImage = document.getElementById('selected-product-image');
        if (selectedProductImage) {
            selectedProductImage.setAttribute('src', productImageSrc);
        }

        // Seleccionar todos los elementos .product-info dentro del modal
        var productInfoElements = modal.querySelectorAll('.product-info');

        // Asignar el nombre del producto al primer elemento .product-info
        if (productInfoElements.length > 0) {
            productInfoElements[0].textContent = productName;
        }

        // Asignar el tamaño del producto o los acompañantes a los elementos .product-info correspondientes
        if (productInfoElements.length > 1) {
            productInfoElements[1].textContent = "Seleccione el tamaño del producto: " + checklistName;
        }
        if (productInfoElements.length > 2) {
            productInfoElements[2].textContent = "Acompañantes: " + checklistName;
        }

        // Resto del código para mostrar los detalles del producto...
        var selectedProductName = document.getElementById('selected-product-name');
        if (selectedProductName) {
            selectedProductName.textContent = productName;
        }

        var selectedChecklistName = document.getElementById('selected-checklist-name');
        if (selectedChecklistName) {
            selectedChecklistName.textContent = checklistName;
        }

        var selectedProductPrice = document.getElementById('selected-product-price');
        if (selectedProductPrice) {
            // Calculamos el precio total sumando el precio del producto y el del checklist
            var productPrice = parseFloat(modal.getAttribute('data-product-price'));
            var totalPrice = productPrice + parseFloat(checklistPrice);
            selectedProductPrice.textContent = 'Precio Total: $' + totalPrice.toFixed(2);
        }

        // Mostrar el contenedor de detalles del producto
        var productDetails = document.getElementById('product-details');
        if (productDetails) {
            productDetails.style.display = 'block';
        }
    }
}

// Agregar evento de clic al botón "Aceptar" en el modal de lechona
document.querySelector('.close-button').addEventListener('click', function() {
    // Obtener los datos del producto seleccionado del modal
    var productName = document.getElementById('product-info').textContent;
    var checklistName = ''; // Reemplaza '' con el nombre del checklist seleccionado
    var checklistPrice = 0; // Reemplaza 0 con el precio del checklist seleccionado

    // Calcular el precio total sumando el precio del producto y el del checklist
    var productPrice = parseFloat(document.querySelector('.menu-item.active').getAttribute('data-price'));
    var totalPrice = productPrice + checklistPrice;

    // Mostrar los detalles del producto seleccionado
    showProductDetails(productName, checklistName, totalPrice);
});

function showProductDetails(productName, checklistName, totalPrice) {
    // Mostrar los detalles del producto seleccionado
    var selectedProductImage = document.getElementById('selected-product-image');
    selectedProductImage.setAttribute('src', ''); // Reemplaza '' con la URL de la imagen del producto

    var selectedProductName = document.getElementById('selected-product-name');
    selectedProductName.textContent = productName;

    var selectedChecklistName = document.getElementById('selected-checklist-name');
    selectedChecklistName.textContent = checklistName;

    var selectedProductPrice = document.getElementById('selected-product-price');
    selectedProductPrice.textContent = 'Precio Total: $' + totalPrice.toFixed(2);

    // Mostrar el contenedor de detalles del producto
    var productDetailsContainer = document.getElementById('product-details-container');
    productDetailsContainer.style.display = 'block';
}

// Agregar evento de clic al botón "Cancelar"
document.getElementById('btn-cancel').addEventListener('click', function() {
    // Ocultar el contenedor de detalles del producto
    var productDetailsContainer = document.getElementById('product-details-container');
    productDetailsContainer.style.display = 'none';
});


