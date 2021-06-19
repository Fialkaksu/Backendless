const lightToggles = document.querySelectorAll('.toggle-light');
const darkToggles = document.querySelectorAll('.toggle-dark');
const backendlessToggles = document.querySelectorAll('.toggle-backendless');

const radioToggles = document.querySelectorAll('.theme__input[type="radio"]')

Array.from(radioToggles).forEach(el => {
  el.addEventListener('click', switchTheme);
});

function switchTheme(e){
  let theme=e.target.dataset.theme;
  console.log("Switching theme to "+ theme);
  document.documentElement.setAttribute('theme', theme);
}