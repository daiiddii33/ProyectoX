// Obtener los elementos de los modales y los enlaces
const loginModal = document.getElementById('login-modal');
const registerModal = document.getElementById('register-modal');
const registerLink = document.getElementById('register-link');
const loginLink = document.getElementById('login-link');
const closeBtns = document.querySelectorAll('.close-btn');

// Mostrar el modal de inicio de sesión
function abrirModal() {
    loginModal.style.display = 'block';
}

// Mostrar el modal de registro
registerLink.addEventListener('click', function (e) {
    e.preventDefault();
    loginModal.style.display = 'none'; // Oculta el modal de inicio de sesión
    registerModal.style.display = 'block'; // Muestra el modal de registro
});

// Volver al modal de inicio de sesión desde el modal de registro
loginLink.addEventListener('click', function (e) {
    e.preventDefault();
    registerModal.style.display = 'none'; // Oculta el modal de registro
    loginModal.style.display = 'block'; // Muestra el modal de inicio de sesión
});

// Cerrar los modales al hacer clic en el botón de cerrar
closeBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        loginModal.style.display = 'none';
        registerModal.style.display = 'none';
    });
});

// Cerrar el modal si se hace clic fuera del contenido
window.onclick = function (event) {
    if (event.target == loginModal) {
        loginModal.style.display = 'none';
    } else if (event.target == registerModal) {
        registerModal.style.display = 'none';
    }
};
