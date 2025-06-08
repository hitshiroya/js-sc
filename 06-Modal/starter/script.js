'use strict';

const model = document.querySelector('.modal');
const modalEle = document.querySelectorAll('.show-modal');
const closwModelButton = document.querySelector('.close-modal');
const overlayModel = document.querySelector('.overlay ');

for (let i = 0; i < modalEle.length; i++) {
  modalEle[i].addEventListener('click', e => {
    model.classList.remove('hidden');
    overlayModel.classList.remove('hidden');
  });
}

closwModelButton.addEventListener('click', e => {
  model.classList.add('hidden');
  overlayModel.classList.add('hidden');
});

document.addEventListener('keydown', e => {
  if (e.key == 'Escape' && !model.classList.contains('hidden')) {
    model.classList.add('hidden');
    overlayModel.classList.add('hidden');
  }
});
