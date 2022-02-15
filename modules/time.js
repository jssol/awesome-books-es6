import { DateTime } from './luxon.js';

const timeDisplay = document.querySelector('.time-display');

const setTime = () => {
  const date = DateTime.now();
  const time = date.toLocaleString(DateTime.DATETIME_MED);
  timeDisplay.textContent = time;
};

setInterval(setTime, 1000);
