const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const delay = event.target.delay.value;
    const state = event.target.state.value;

    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
                resolve(`Fulfilled promise in ${delay}ms`);
            } else {
                reject(`Rejected promise in ${delay}ms`);
            }
        }, delay)
    }).then((message) => {
      console.log(message);
    }).catch((error) => {
      console.log(error);
    })
})