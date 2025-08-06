let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

if (localStorage.getItem('feedback-form-state')) {
  formData = JSON.parse(localStorage.getItem('feedback-form-state'));
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

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData = { email: '', message: '' };
    form.reset();
  }
});
