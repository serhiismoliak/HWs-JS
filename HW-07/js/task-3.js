const nameInput = document.querySelector('name-input');
const nameOutput = document.querySelector('name-output');
nameInput.addEventListener('input', () => {
  const name = nameInput.textContent.trim();
  nameOutput.textContent = name ? name : 'Anonymous';
});
