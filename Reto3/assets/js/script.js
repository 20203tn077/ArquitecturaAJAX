// http://127.0.0.1/api/book/index
const characterContainer = document.getElementById('characterContainer')
const fetchBooks = async () => {
    const res = await fetch('http://127.0.0.1:5500/Reto3/assets/json/mock.json')
    if (!res.ok) throw new Error(`HTTP error! status: ${response.status}`)
    return res.json()
}

fetchBooks().then(({data: books}) => {
    console.log(books)
    output = ''
    for(book of books) {
        const {isbn, title, description, published_date: publishedDate, category: {name: category}, editorial: {name: editorial}} = book
        output += `
        <tr>
            <td>${isbn}</td>
            <td>${title}</td>
            <td>${description}</td>
            <td>${publishedDate}</td>
            <td>
                <span class="badge text-bg-primary">${category}</span>
            </td>
            <td>${editorial}</td>
        </tr>`
    }
    booksContainer.innerHTML = output
})