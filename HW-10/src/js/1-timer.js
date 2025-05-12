import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startButton = document.querySelector('[data-start]');
startButton.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    const now = new Date();
    if (userSelectedDate < now) {
      alert('Please choose a date in the future!');
      startButton.disables = true;
    } else {
      startButton.disabled = false;
    }
  },
};

flatpickr('#datetime-picker', options);
let userSelectedDate = new Date();

startButton.addEventListener('click', event => {
  event.target.disabled = true;

  const counters = {
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
  };

  const timer = setInterval(() => {
    const now = new Date();
    const elapsedTime = userSelectedDate - now;
    const timeLeft = padStart(convertMs(elapsedTime));

    // Update all counters at once
    Object.entries(timeLeft).forEach(([unit, value]) => {
      counters[unit].textContent = value;
    });

    // Stop timer if time is up
    if (elapsedTime < 1000) {
      Object.values(counters).forEach(counter => {
        counter.textContent = '00';
      });
      clearInterval(timer);
    }
  }, 1000);
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function padStart(time_24 = { days, hours, minutes, seconds }) {
  Object.entries(time_24).forEach(([key, value]) => {
    time_24[key] = String(value).padStart(2, '0');
  });
  return time_24;
}
