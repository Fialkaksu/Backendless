const radioToggles = document.querySelectorAll('.theme__toggle[type="radio"]');
const buttonToggles = document.querySelectorAll('button.theme__toggle');
const selectToggles = selectTheme;
const elementsToInvert = document.querySelectorAll('.gallery__item');

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
  Array.from(elementsToInvert).forEach(el => {
    if (theme === 'backendless') {
      el.classList.add('invert');
    } else {
      el.classList.remove('invert');
    }
  });
}