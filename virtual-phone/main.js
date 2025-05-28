// Seleciona todos os botões de número
var numbers = document.querySelectorAll("input[type='button']");
// Seleciona o campo de telefone
var input = document.querySelector('input[type="tel"]');

// Para cada botão de número, adiciona um evento de clique
numbers.forEach(function (button) {
  button.addEventListener("click", function () {
    // Adiciona o valor do botão ao campo de telefone
    input.value += button.value;
    if (input.value.length > 11) {
      input.value = input.value.slice(0, 11); // Limita a 11 dígitos
    }
  });
});

// Seleciona o botão de apagar (delete)
let clearButton = document.querySelector("#delete");
// Adiciona evento de clique para apagar o último dígito
clearButton.addEventListener("click", function () {
  input.value = input.value.slice(0, -1);
});

// Seleciona o botão de ligar (call)
let callButton = document.querySelector("#call");
let callingInterval = null;

// Adiciona evento de clique para o botão de ligar
callButton.addEventListener("click", function () {
  // Impede múltiplas ligações ao mesmo tempo
  if (callingInterval) return;

  // Remove alerta anterior, se existir
  let existingAlert = document.getElementById("custom-alert");
  if (existingAlert) existingAlert.remove();

  // Cria uma caixa de alerta personalizada
  let alertBoxGreen = document.createElement("div");
  alertBoxGreen.id = "custom-alert";
  alertBoxGreen.textContent = "LIgando para o número " + input.value;
  Object.assign(alertBoxGreen.style, {
    position: "fixed",
    bottom: "40px",
    left: "50%",
    transform: "translateX(-50%)",
    background: " rgb(132, 245, 76)",
    color: "#fff",
    padding: "28px 48px",
    borderRadius: "18px",
    fontSize: "2rem",
    zIndex: 9999,
    textAlign: "center",
    fontFamily: "'Bebas Neue', Arial, sans-serif",
    boxShadow: "0 8px 32px rgba(78,84,200,0.25)",
    letterSpacing: "2px",
    border: "2px solid #fff",
    transition: "all 0.3s",
    opacity: "0.97"
  });

// Adiciona a caixa de alerta ao corpo da página
  document.body.appendChild(alertBoxGreen);


  // Seleciona o botão de desligar (hangup)
  let hangupButton = document.querySelector("#hangup");

  

  // Cria um intervalo (aqui está vazio, mas pode ser usado para animação)
  callingInterval = setInterval(function () {
    // Pode adicionar lógica de chamada aqui
  });

  // Evento para desligar a chamada
  hangupButton.addEventListener("click", function () {
    clearInterval(callingInterval);
    callingInterval = null;
    alertBoxGreen.remove();
  });
});
