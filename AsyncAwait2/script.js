async function fetchUsers() {
  const response = await fetch('https://api.github.com/users', {
    headers: { Accept: 'application/json' },
  });
  if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
  return await response.json();
}

fetchUsers().then(data => {
  let exist = false;
  Object.entries(data).forEach(([key, value]) => {
    if(value.login == "mojodna"){ // Imprimir solo si login = mojodna
      console.log(Object.values(value));
      exist = true;
    }
  });
  if(!exist)
    console.log("No existe el registro...");
});