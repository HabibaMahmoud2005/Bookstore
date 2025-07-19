'use strict';

const myForm = document.querySelector('#my-form');
const inputs = document.querySelectorAll('.boxes');
const genderInputs = document.querySelectorAll('input[name="gender"]');
const msg = document.querySelector('.msg');
// Event listener
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  let emptyFound = false;

  inputs.forEach(input => {
    if (input.value.trim() === '') {
      emptyFound = true;
    }
  });

  // Check if no gender is selected
  let genderSelected = false;
  genderInputs.forEach(g => {
    if (g.checked) {
      genderSelected = true;
    }
  });

    if (emptyFound || !genderSelected) {
    msg.style.display = 'block';
    setTimeout(() => msg.style.display = 'none', 3000);
  } else {
    myForm.submit();
  }
}
