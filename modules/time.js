import { DateTime } from '../node_modules/luxon/build/es6/luxon.js';

const timeDisplay = document.querySelector('.time-display');

const setTime = () => {
  const date = DateTime.now();
  const time = date.toLocaleString(DateTime.DATETIME_MED);
  timeDisplay.textContent = time;
};

setInterval(setTime, 1000);
