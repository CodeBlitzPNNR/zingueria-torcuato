
let form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const response = await fetch('http://localhost:8080/api/session/', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        // @ts-ignore
        body: new URLSearchParams(new FormData(form))
    });
    console.log(response)
});