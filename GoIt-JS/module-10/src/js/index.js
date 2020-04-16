import menuList from '../data/menu.json';
import './css/style.css';
import menuItemTemplate from './templates/menu-template.hbs';
//-----------//
const btnSwitchTheme = document.querySelector('.js-switch-input');
const body = document.querySelector('.js-body');
const section = document.querySelector('.js-menu');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
crateMenu(menuList);

const curentTheme = localStorage.getItem('theme');
curentTheme === Theme.LIGHT || curentTheme === null
  ? lightTheme()
  : darkTheme();

btnSwitchTheme.addEventListener('change', setTheme);

function crateMenu(menuList) {
  const menuItem = menuList
    .map(itemMenu => menuItemTemplate(itemMenu))
    .join('');
  section.insertAdjacentHTML('beforeend', menuItem);
}

function setTheme() {
  btnSwitchTheme.checked ? darkTheme() : lightTheme();
}

function darkTheme() {
  btnSwitchTheme.checked = true;
  localStorage.setItem('theme', Theme.DARK);
  body.classList.remove(Theme.LIGHT);
  body.classList.add(Theme.DARK);
}
function lightTheme() {
  localStorage.setItem('theme', Theme.LIGHT);
  body.classList.remove(Theme.DARK);
  body.classList.add(Theme.LIGHT);
}
