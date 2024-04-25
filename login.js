document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtener los valores del usuario y la contraseña
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verificar las credenciales
    if (username === 'bingo' && password === 'Casa45.45') {
        // Redirigir a otra página después del inicio de sesión exitoso
        window.location.href = './Bingo/Bingo.html';
    } else {
        // Mostrar mensaje de error si las credenciales son incorrectas
        document.getElementById('error-message').textContent = 'Nombre de usuario o contraseña incorrectos';
    }
});
