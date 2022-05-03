# desafio_abracadabra
Desafio abracadabra bootcamp desafio latam

El instituto recreativo más conocido de la ciudad, contrató recientemente
una asesoría de marketing para aumentar el tráfico en su sitio web. La consultora, en base
al análisis realizado a la empresa contratante, les propone aumentar la interacción con los
usuarios que visitan su sitio web, a través de la creación de juegos de azar con temáticas
relacionadas a los diferentes shows que ofrece el instituto. Además, propone que estos
juegos solo puedan realizarlos usuarios registrados, con el fin de generar más fidelidad con
su público.

Desarrollar un servidor con Express que sirva un sitio web estático
con temática de magia, donde se presenten 4 sombreros y al hacer click en uno de estos
encontrar el conejo oculto.


El servidor deberá disponibilizar las siguientes rutas:
1. /abracadabra/usuarios: Se debe devolver un JSON con un arreglo de nombres
alojado en el servidor.
2. /abracadabra/juego/:usuario: A través de un middleware, verificar que el usuario
escrito como parámetro existe en el arreglo alojado en el servidor.
3. /abracadabra/conejo/:n: Basado en un número aleatorio del 1 al 4, devolver la foto
del conejo en caso de coincidir con el número recibido como parámetro ó devolver la
foto de Voldemort en caso de no coincidir.
