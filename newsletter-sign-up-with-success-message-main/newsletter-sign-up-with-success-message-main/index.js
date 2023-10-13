const input = document.querySelector('input');
const submitButton = document.querySelector('#submit');
const successButton = document.querySelector('#confirm')
const errorMessage = document.querySelector('.error-message')
const root = document.querySelector('body');
const successCard = document.querySelector('.success-card')
const mainCard = document.querySelector('.principal')

const emailRgx = /^\S+@\S+\.\S+$/;


const resetInput = () => {
  input.classList.remove('error')
  errorMessage.style.visibility = 'hidden'
}

const validateEmail = () => {
  const isValid = emailRgx.test(input.value);

  if (isValid) {
    mainCard.style.display = 'none';
    successCard.style.display = 'flex';
    input.value = '';
  } else {
    input.classList.add('error')
    errorMessage.style.visibility = 'visible';
  }
}

const returnToHome = () => {
  mainCard.style.display = 'flex';
  successCard.style.display = 'none';
}

submitButton.addEventListener('click', validateEmail);
successButton.addEventListener('click', returnToHome)
input.addEventListener('focus', resetInput);