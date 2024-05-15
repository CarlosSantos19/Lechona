document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

    // Obtener los valores de nombre de usuario y contraseña
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

        // Verificar las credenciales (por simplicidad, vamos a usar credenciales fijas)
        var validUsername = 'username';
        var validPassword = 'password';

    // Aquí puedes realizar una solicitud AJAX para enviar los datos de inicio de sesión al servidor
    // Por simplicidad, solo mostraremos los valores en la consola
    console.log('Nombre de Usuario:', username);
    console.log('Contraseña:', password);

    // Redirigir al usuario al panel de administración si el inicio de sesión es exitoso
    // window.location.href = 'panel-administracion.html';

    if (username === validUsername && password === validPassword) {
        // Credenciales válidas, redirigir al usuario a la página de pedidos.html
        window.location.href = 'pedidos.html';
    } else {
        // Credenciales inválidas, mostrar un mensaje de error o tomar otra acción
        alert('Nombre de usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
    }
});
