const radioToggles = document.querySelectorAll('.theme__toggle[type="radio"]');
const buttonToggles = document.querySelectorAll('button.theme__toggle');
const selectToggles = selectTheme;
const galleryItems = document.querySelectorAll('.gallery__item');
console.log(galleryItems)
let theme;

Array.from(radioToggles).forEach(el => {
  el.addEventListener('click', switchTheme);
});

Array.from(buttonToggles).forEach(el => {
  el.addEventListener('click', switchTheme);
});

selectToggles.addEventListener('change', () => {
  let index = selectToggles.selectedIndex;
  switch (index) {
    case 0:
      theme = 'light';
      break;
    case 1:
      theme = 'dark';
      break;
    case 2:
      theme = 'backendless';
      break;
    default:
      theme = 'light';
  }
  document.documentElement.setAttribute('theme', theme);
  checkInvert();
});


function switchTheme(e) {
  theme = e.target.dataset.theme;
  document.documentElement.setAttribute('theme', theme);
  checkInvert();
}

function checkInvert() {
  Array.from(galleryItems).forEach(el => {
    if (theme === 'backendless') {
      el.classList.add('invert');
      modal.classList.add('invert');
    } else {
      el.classList.remove('invert');
      modal.classList.remove('invert');
    }
  });
}

const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal__content');
const captionText = document.querySelector('.modal__caption');
const modalClose = document.querySelector('.modal__close');

Array.from(galleryItems).forEach(el => {
  el.addEventListener('click', showModal);
});

function showModal() {
  modal.style.display = 'block';
  modalImg.src = 'assets/fox.jpg';
  captionText.innerHTML = 'fox';
  checkInvert();
}

modalClose.onclick = function () {
  modal.style.display = 'none';
}