const radioToggles = document.querySelectorAll('.theme__toggle[type="radio"]');
const buttonToggles = document.querySelectorAll('button.theme__toggle');
const selectToggles = selectTheme;
const galleryItems = document.querySelectorAll('.gallery__item');

let theme;

const base = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/';
const images = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];
const timeOfDay = ['morning', 'day', 'evening', 'night'];

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
  const srcModal = getImage();
  el.style = `background-image: url("${srcModal}");`

  el.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = srcModal;
    captionText.innerHTML = 'Welcome to Backendless';
    checkInvert();
  });
});

modalClose.onclick = function () {
  modal.style.display = 'none';
}

function getTimeOfDay() {
  const now = new Date();
  let timeOfDay;
  if (now.getHours() >= 6 && now.getHours() < 12) {
    timeOfDay = 'morning';
  } else if (now.getHours() >= 12 && now.getHours() < 18) {
    timeOfDay = 'day';
  } else if (now.getHours() >= 18 && now.getHours() < 24) {
    timeOfDay = 'evening';
  } else {
    timeOfDay = 'night';
  }
  return timeOfDay;
}

function getImage() {
  const index = Math.floor(Math.random() * 18 + 1);
  console.log(index)
  const imageSrc = base + getTimeOfDay() + '/' + images[index];
  return imageSrc;
}