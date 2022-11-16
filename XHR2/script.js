(useXhr = (url) => {
    // 1. Crear el objeto XMLHttpRequest
    const xhr = new XMLHttpRequest();
    // 2. Inicializarlo, usualmente justo después de crear el objeto
    xhr.open('GET', url);
    // 3. Asignar formato de respuesta
    xhr.responseType = 'json';
    // 4. Enviar la solicitud
    xhr.send();
    // 5. Escuchar los eventos de respuesta xhr
    xhr.onload = function() { // Respuesta recibida
      if (this.status === 200) {
        console.log(this.response);
        document.write(`${this.response.name} <br>`);
        document.write(this.response.location);
      }
    }
    xhr.onerror = function() { // Sin respuesta
      alert(`Solicitud fallida...`);
    };
  })('https://api.github.com/users/1');