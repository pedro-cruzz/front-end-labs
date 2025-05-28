const themeToggle = document.getElementById('button-toggle-theme');
const body = document.body;

// Verifica se há um tema salvo no localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
} else {
    body.classList.add('light-theme'); // padrão
}

// Alterna entre os temas claro e escuro
themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light-theme');
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark-theme');
    }
});