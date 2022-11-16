const characterContainer = document.getElementById('characterContainer')
const fetchCharacters = async () => {
    const res = await fetch('https://swapi.py4e.com/api/people/')
    if (!res.ok) throw new Error(`HTTP error! status: ${response.status}`)
    return res.json()
}

fetchCharacters().then(({results: characters}) => {
    console.log(characters)
    output = ''
    for(character of characters) {
        const {name, height, hair_color: hairColor, eye_color: eyeColor, birth_year: birthYear, gender} = character
        output += `
        <tr>
            <td>${name}</td>
            <td>${height}</td>
            <td>${hairColor}</td>
            <td>${eyeColor}</td>
            <td>${birthYear}</td>
            <td>${gender}</td>
        </tr>`
    }
    characterContainer.innerHTML = output
})