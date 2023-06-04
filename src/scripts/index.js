import 'regenerator-runtime'; /* for async await transpile */
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('.drawer-list'),
  content: document.querySelector('#maincontent'),
});

const skipLink = document.querySelector('.skip-link');
const mainContent = document.querySelector('#maincontent');

skipLink.addEventListener('click', (event) => {
  event.preventDefault();
  mainContent.scrollIntoView({ behavior: 'smooth' });
  skipLink.blur();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
