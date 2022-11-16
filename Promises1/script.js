(usePromise = (url) => {
  return new Promise((resolve, reject) => {
      fetch(url)
          .then(res => res.json())
          .then(data => resolve(data))
          .catch(err => reject(err))
  })
})('https://pokeapi.co/api/v2/pokemon/charmander')
  .then(data => console.log(data))
  .catch(err => console.log(err))