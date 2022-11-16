(useXhr = (url) => {
    // 1. Crear el objeto XMLHttpRequest
    const xhr = new XMLHttpRequest();
    // 2. Inicializarlo, usualmente justo después de crear el objeto
    xhr.open('GET',url,false); // false = petición asincrónica
    // 3. Escuchar los eventos de respuesta xhr
    xhr.onload = function() { // Respuesta recibida
      if(this.status === 200) {
        console.log(this.responseText); // Imprimir en la consola
        document.write(this.responseText); // Añadir contenido al DOM
      }
    }
    // 4. Enviar la solicitud
    xhr.send();
})('https://api.github.com/users/1')