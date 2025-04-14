function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorEl = document.querySelector('.widget span.color');
document.querySelector('button.change-color').addEventListener('click', () => {
  const randomColor = getRandomHexColor()
  document.body.style.backgroundColor = randomColor;
  colorEl.textContent = randomColor;
});
