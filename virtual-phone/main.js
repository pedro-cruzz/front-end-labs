// Seleciona todos os botões de número
var numbers = document.querySelectorAll("input[type='button']");
// Seleciona o campo de telefone
var input = document.querySelector('input[type="tel"]');

// Para cada botão de número, adiciona um evento de clique
numbers.forEach(function (button) {
  button.addEventListener("click", function () {
    // Adiciona o valor do botão ao campo de telefone
    input.value += button.value;
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
  let alertBox = document.createElement("div");
  alertBox.id = "custom-alert";
  alertBox.textContent = "LIgando para o número " + input.value;
 Object.assign(alertBox.style, {
    position: "fixed",
    top: "90%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "#fff",
    color: "#333",
    padding: "24px 40px",
    borderRadius: "12px",
    fontSize: "1.5rem",
    zIndex: 9999,
    color: "#000",
    textAlign: "center",
    fontFamily: "Bebas Neue",
  });

  // Seleciona o botão de desligar (hangup)
  let hangupButton = document.querySelector("#hangup");

  // Adiciona a caixa de alerta ao corpo da página
  document.body.appendChild(alertBox);

  // Cria um intervalo (aqui está vazio, mas pode ser usado para animação)
  callingInterval = setInterval(function () {
    // Pode adicionar lógica de chamada aqui
  });

  // Evento para desligar a chamada
  hangupButton.addEventListener("click", function () {
    clearInterval(callingInterval);
    callingInterval = null;
    alertBox.remove();
  });
});
