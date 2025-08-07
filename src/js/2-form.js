let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  formData = JSON.parse(savedData);
  form.email.value = formData.email;
  form.message.value = formData.message;
}

form.addEventListener('input', function (event) {
  if (event.target.name === 'email') {
    formData.email = event.target.value;
  }

  if (event.target.name === 'message') {
    formData.message = event.target.value;
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const email = formData.email.trim();
  const message = formData.message.trim();

  if (email === '' || message === '') {
    alert('Будь ласка, заповніть всі поля');
    return;
  }

  console.log({ email, message });
  localStorage.removeItem('feedback-form-state');
  formData = { email: '', message: '' };
  form.reset();
});
