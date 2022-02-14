import setTime from './modules/time.js';
import './modules/content.js';

setTime();
setInterval(setTime, 1000);
