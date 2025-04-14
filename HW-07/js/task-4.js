document.querySelector('.login-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.target;
  const email = form.elements['email'].value.trim();
  const password = form.elements['password'].value.trim();

  if (!email || !password) {
    alert('All form fileds must be filled in');
  } else {
    console.log("dfd",{ email, password });
  }
});
