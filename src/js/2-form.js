


const STORAGE_KEY = 'feedback-form-state';


let formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');
const emailInput = form.elements['email'];
const messageInput = form.elements['message'];

window.addEventListener('DOMContentLoaded', loadFormData);

form.addEventListener('input', onFormInput);

form.addEventListener('submit', onFormSubmit);

function loadFormData() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    formData = JSON.parse(savedData);
    emailInput.value = formData.email || '';
    messageInput.value = formData.message || '';
  }
}


function onFormInput(event) {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}


function onFormSubmit(event) {
  event.preventDefault();


  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }


  console.log(formData);


  formData = { email: '', message: '' };
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}
