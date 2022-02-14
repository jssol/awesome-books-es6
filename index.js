import setTime from './modules/time.js';

const timeDisplay = document.querySelector('.time-display');

setInterval(setTime, 1000);