let nome = "Pedro";
alert("Boa noite, " + nome);

const linkExterno = 
        document.querySelector('a[title="Google Maps"]');

//linkExterno.onclick = () => {
  //  alert("Você será redirecionado para um link externo.");
//};

linkExterno.addEventListener('click', () => {
        alert("Você será redirecionado para um link externo.");
});