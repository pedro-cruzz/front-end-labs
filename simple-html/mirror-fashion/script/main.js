let nome = "Pedro";
alert("Boa noite, " + nome);

const linkExterno = 
        document.querySelector('a[title="Google Maps"]');

//linkExterno.onclick = () => {
  //  alert("Você será redirecionado para um link externo.");
//};

linkExterno.addEventListener('click', (e) => {
    const option = confirm("Você será redirecionado para um link externo.");

    if (option === false) {
        e.preventDefault();
    }
    return false;
});