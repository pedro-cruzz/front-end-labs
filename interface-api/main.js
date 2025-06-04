document.getElementById('search-btn').addEventListener('click', buscarUsuario);
document.getElementById('git_id').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') buscarUsuario();
});

function buscarUsuario() {
    const usuario = document.getElementById('git_id').value.trim();
    if (!usuario) {
        preencherCampos(null, 'Digite um usuário!');
        return;
    }

    fetch(`https://api.github.com/users/${usuario}`)
        .then(res => {
            if (!res.ok) throw new Error('Usuário não encontrado');
            return res.json();
        })
        .then(data => preencherCampos(data))
        .catch(() => preencherCampos(null, 'Usuário não encontrado'));
}

function preencherCampos(data, erro) {
    document.getElementById('name').textContent = data ? data.name || '-' : erro || '-';
    document.getElementById('bio').textContent = data ? data.bio || '-' : '-';
    document.getElementById('followers').textContent = data ? data.followers : '-';
    document.getElementById('location').textContent = data ? data.location || '-' : '-';
    document.getElementById('avatar').src = data && data.avatar_url ? data.avatar_url : '';
    document.getElementById('avatar').alt = data && data.name ? `Avatar de ${data.name}` : 'Avatar do usuário';
}