(usePromise = (url) => {
  return new Promise((resolve, reject) => {
      fetch(url)
          .then(res => res.json())
          .then(data => resolve(data))
          .catch(err => reject(err))
  })
})('https://pokeapi.co/api/v2/pokemon/charmander')
  .then(data => {
      document.write("<p>Habilidades de Charmander</p>")
      document.write("<ul>")
      for (const [key, value] of Object.entries(data.abilities)) {
          document.write(`<li> ${value.ability.name} </li>`);
      }
      document.write("</ul>")
  })
  .catch(err => console.log(err))