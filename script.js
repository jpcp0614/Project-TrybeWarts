const buttonLogin = document.getElementById('btn');

buttonLogin.addEventListener('click', () => {
  const login = document.querySelector('[name=email]');
  const senha = document.querySelector('[name=password]');
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
