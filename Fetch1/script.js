(useFetch = (url) => {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.write("Keys: <br>")
      for (const [key] of Object.entries(data)) {
        console.log(key);
        document.write(`- ${key} <br>`);
      }
    })
    .catch(err => {
      console.log(err);
    });
})('https://api.github.com/users/1');