# Express-Tarot-Server

## Prerequisitos
- Instala los requerimientos para el servidor.
	```
	npm install
	```

Este es un tutorial para crear un servidor de [express](https://expressjs.com/) 
que sera consultado por una función lambda alojada en el Amazon Web Service (AWS) que a su vez es consumida por un skill de Alexa.

## Estructura
- El archivo de entrada es app.js.
- En models/cards.js hay un arreglo de objectos llamado **cards**, cada objeto contiene un **nombre** y un **significado**.
- En routes/router.js tenemos nuestro controlador para la dirección "/", junto con la get_random_cards(), obtiene del arreglo cards del punto anterior 3 cartas, la primera con el significado 0, la segunda con el significado 1, y la tercera con el signficado 3. Estos representan el pasado, presente y futuro.