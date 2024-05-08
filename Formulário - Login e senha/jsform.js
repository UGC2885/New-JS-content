// Função para validar o formulário de login
function validarLogin() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const username = usernameInput.value
    const password = passwordInput.value
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
  
    // Remover classes de estilo existentes
    usernameInput.classList.remove('invalid');
    passwordInput.classList.remove('invalid');
  
    // Esconder mensagens de erro inicialmente
    usernameError.style.display = 'none';
    passwordError.style.display = 'none';
  
    // Verificar se os campos estão preenchidos
    if (username === '' || password === '') {
      // Adicionar classe 'invalid' para destacar campos vazios
      usernameInput.classList.add('invalid');
      passwordInput.classList.add('invalid');
      return false;
    }
  
    // Validar nome (exemplo simples: deve ter mais de 3 caracteres)
    if (username.length < 4) {
      usernameError.innerText = 'O nome de usuário deve ter mais de 4 caracteres.';
      usernameError.style.display = 'block'; // Exibir mensagem de erro
      usernameInput.classList.add('invalid');
      return false;
    }
  
    // Simular validação da senha (exemplo: senha incorreta)
    if (password.length < 4) {
      passwordError.innerText = 'A senha deve ter mais que 4 caracteres';
      passwordError.style.display = 'block'; // Exibir mensagem de erro
      passwordInput.classList.add('invalid');
      return false;
    }
  
    // Simular login bem-sucedido

    // Adicionar classe 'valid' para indicar campos corretos
    usernameInput.classList.add('valid');
    passwordInput.classList.add('valid');
    return true; // Permitir envio do formulário
  }