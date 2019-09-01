import createElement from './createElement.js';
import render from './render.js';

const root = document.getElementById('root');

const el1 = createElement('button', { class: 'red' }, 'Click');

render(el1, root);


/*
 * tick interval
*/

const tick = function() {
    const dateTime = new Date().toLocaleDateString();

    const el2 = createElement('div', { class: 'time' }, dateTime);

    render(el2, document.getElementById('root'))
};

setInterval(tick, 1000);
