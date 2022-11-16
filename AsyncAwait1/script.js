async function fetchUsers() {
  const response = await fetch('https://api.github.com/users');
  if (!response.ok) { // Respuesta con estatus no exitoso
		throw new Error(`HTTP error! status: ${response.status}`);
	}
  return await response.json(); // Retornar la respuesta
}

fetchUsers().then(data => { // Obtener los datos de la función async
  console.log(`Número de registros: ${data.length}`);
});