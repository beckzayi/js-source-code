import createElement from './createElement.js';
import render from './render.js';

const root = document.getElementById('root');

const el = createElement('button', { class: 'red' }, 'Click');

render(el, root);
