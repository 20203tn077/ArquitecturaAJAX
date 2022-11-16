async function fetchImagesCats() {
  const response = await fetch('https://api.thecatapi.com/v1/images/search', {
      headers: { Accept: 'application/json' },
  });
  if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
}

fetchImagesCats().then(data => {
  Object.entries(data).forEach(([key, value]) => {
      document.write(`<img src="${value.url}" alt="${value.id}" 
    width="${value.width}" height="${value.height}">`);
  });
});