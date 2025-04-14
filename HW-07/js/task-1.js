const categories = document.getElementById('categories');
const items = categories.querySelectorAll('li.item');

console.log('Number of categories: ', items.length);

items.forEach((item) => {
  console.log(item.querySelector('h2').innerText);
  console.log(item.querySelectorAll('li').length);
});
