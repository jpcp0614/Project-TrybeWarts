const inputLogin = document.querySelector('.input-login');
const inputSenha = document.querySelector('.input-senha');
const button = document.querySelector('.btn');

function loginVerification() {
  if (
    inputLogin.value === 'tryber@teste.com'
    && inputSenha.value === '123456'
  ) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

button.addEventListener('click', loginVerification);
