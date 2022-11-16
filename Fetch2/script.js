(useFetch = (url) => {
  fetch(url)
      .then(response => response.json())
      .then(data => document.write(data.activity))
      .catch(err => console.log(err));
})('https://www.boredapi.com/api/activity');