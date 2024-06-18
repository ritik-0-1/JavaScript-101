'use strict';

const modal = document.querySelector('.modal'); //stored result of the selection in an variable
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); //using the All thing in QS

console.log(btnsOpenModal);

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
  //   console.log(`Button ${i+1} clicked`); //GOOD CHAMP :D
  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', function (e) {
    //e here is the object of eventlistener
    // console.log(e.key);
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal(); //we need to call to this as this function is ended
  });
}
