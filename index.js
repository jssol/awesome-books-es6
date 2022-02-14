import setTime from './modules/time.js';
import './modules/content.js';
import './modules/spa.js';

setTime();
setInterval(setTime, 1000);
