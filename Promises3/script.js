(usePromise = (url) => {
  return new Promise((resolve, reject) => {
      fetch(url)
          .then(res => res.json())
          .then(data => resolve(data))
          .catch(err => reject(err))
  })
})('https://pokeapi.co/api/v2/pokemon/')
  .then(data => {
    document.write("<p>Lista de Pokemones</p>")
    document.write("<ul>")
    for (const [key, value] of Object.entries(data.results)) {
      document.write(`<li> ${value.name} </li>`);
    }
    document.write("</ul>")
  })
  .catch(err => console.log(err))