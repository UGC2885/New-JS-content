function formatarCPF(campo) {
  let cpf = campo.value.replace(/\D/g, '');
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  campo.value = cpf;
}

function validaContato() {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const cpf = document.getElementById("cpf").value.trim();
  const statusMessage = document.getElementById("statusMessage");

  // Expressão regular para validar o formato do email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nome === "" || !emailRegex.test(email) || cpf === "") {
    statusMessage.innerText = "Por favor, preencha todos os campos corretamente.";
    statusMessage.style.color = "red";
    setTimeout(() => {
      statusMessage.innerText = "";
    }, 2000);
    return false;
  }

  // Mostra a mensagem de envio por 1 segundo antes de enviar
  statusMessage.innerText = "Enviando mensagem...";
  statusMessage.style.color = "green";
  setTimeout(() => {
    statusMessage.innerText = "Mensagem enviada com sucesso!";
    statusMessage.style.color = "green";
  }, 1000); // 1000 milissegundos = 1 segundo

  return false; // Retorne false para evitar que o formulário seja enviado diretamente pelo HTML
}