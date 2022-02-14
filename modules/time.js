export default () => {
  const date = new Date();
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const day = date.getDate();
  let minutes = date.getMinutes();
  const hours = date.getHours();
  let seconds = date.getSeconds();

  if (seconds.toString().length < 2) {
    seconds = `0${seconds}`;
  }
  if (minutes.toString().length < 2) {
    minutes = `0${minutes}`;
  }
  if (hours.toString().length < 2) {
    hours = `0${hours}`;
  }

  const time = `${month} ${day}th ${year}, ${hours}:${minutes}:${seconds}`;
  timeDisplay.textContent = '';
  timeDisplay.textContent = `${time}`;
};

setTime();
