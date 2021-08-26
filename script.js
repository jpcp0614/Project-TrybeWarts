<<<<<<< HEAD

function handleLoad() {
  const buttonLogin = document.getElementById('btn');
  const buttonSubmit = document.getElementById('submit-btn');
  const agreementCheck = document.getElementById('agreement');
  buttonLogin.addEventListener('click', () => {
    const login = document.querySelector('[name=email]');
    const senha = document.querySelector('[name=password]');
    if (login.value === 'tryber@teste.com' && senha.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
    
  });
  buttonSubmit.disabled = true;
  agreementCheck.addEventListener('click', buttonSubmitDisabledOrEnabled);
} 

window.onload = handleLoad

function buttonSubmitDisabledOrEnabled() {
  const buttonSubmit = document.getElementById('submit-btn');
  const agreementCheck = document.getElementById('agreement');
  agreementCheck
=======
const buttonLogin = document.getElementById('btn');
const buttonSubmit = document.getElementById('submit-btn');
const agreementCheck = document.getElementById('agreement');

// button Entrar
// Requisito 3 OK
buttonLogin.addEventListener('click', () => {
  const login = document.querySelector('[name=email]');
  const senha = document.querySelector('[name=password]');
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

buttonSubmit.disabled = true;
window.onload = buttonSubmit.disabled;
function buttonSubmitDisabledOrEnabled() {
>>>>>>> 0f122d125c33d3d92aaf67ba37fbfe554044ae89
  if (agreementCheck.checked === true) {
    buttonSubmit.disabled = false;
  } else if (agreementCheck.checked === false) {
    buttonSubmit.disabled = true;
  }
}
<<<<<<< HEAD

=======
agreementCheck.addEventListener('click', buttonSubmitDisabledOrEnabled);
>>>>>>> 0f122d125c33d3d92aaf67ba37fbfe554044ae89
