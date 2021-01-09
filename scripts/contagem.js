const daysContainer = document.querySelector('#days');
const hoursContainer = document.querySelector('#hours');
const minutesContainer = document.querySelector('#minutes');
const secondsContainer = document.querySelector('#seconds');
const nextBirthdayContainer = document.querySelector('#birthday');
const spinnerLoading = document.querySelector('#loading');
const countDownContainer = document.querySelector('#countdown');

const nextBirthday = new Date().getFullYear() +1;
const newBirthdayTime = new Date(`April 03 ${nextBirthday} 00:00:00`);

nextBirthdayContainer.textContent = nextBirthday;

const getTimeUnit = unit => unit < 10 ? '0' + unit : unit;

const insertCountdownValues = ({ days, hours, minutes, seconds }) => {
  secondsContainer.textContent = getTimeUnit(seconds);
  daysContainer.textContent = getTimeUnit(days);
  hoursContainer.textContent = getTimeUnit(hours);
  minutesContainer.textContent = getTimeUnit(minutes);
}

const updateCountdown = () => {
  const currentTime = new Date();
  const difference = newBirthdayTime - currentTime;
  const days = Math.floor(difference / 1000 / 60 / 60 / 24);
  const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(difference / 1000 / 60) % 60;
  const seconds = Math.floor(difference / 1000) % 60;

  insertCountdownValues({ days, hours, minutes, seconds });
}


const handleCountdownDisplay = () => {
  spinnerLoading.remove()
  countDownContainer.style.display = 'flex';
}
setTimeout(handleCountdownDisplay, 1000);
setInterval(updateCountdown, 1000);