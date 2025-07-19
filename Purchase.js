'use strict';

const myForm = document.querySelector('#my-form');
const inputs = document.querySelectorAll('.boxes');
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


    if (emptyFound) {
    msg.style.display = 'block';
    setTimeout(() => msg.style.display = 'none', 3000);
  } else {
    myForm.submit();
  }
}
