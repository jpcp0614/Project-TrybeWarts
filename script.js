function buttonSubmitDisabledOrEnabled() {
  const buttonSubmit = document.getElementById('submit-btn');
  const agreementCheck = document.getElementById('agreement');
  if (agreementCheck.checked === true) {
    buttonSubmit.disabled = false;
  } else if (agreementCheck.checked === false) {
    buttonSubmit.disabled = true;
  }
}

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
window.onload = handleLoad;

// const textArea = document.getElementById('textarea');
// const numarate = document.getElementById('counter');

// function characterCounter() {
//   const counterTextArea = 500 - textArea.value.length;
//   numarate.innerText = counterTextArea;
// }
// textArea.addEventListener('keyup', characterCounter);
