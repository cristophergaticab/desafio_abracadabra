const express = require('express');
const app = express();
const fs = require('fs');
//const { findSourceMap } = require('module');

//1. Crear un servidor con Express en el puerto 3000
app.listen(3000, () => {
    console.log("El servicio Abracadabra está inicializado en el puerto http://localhost:3000");
});

//2. Definir la carpeta “assets” como carpeta pública del servidor

app.use(express.static("assets"));

// 3. Crear en el servidor un arreglo de nombres y devolverlo en formato JSON a través de la ruta /abracadabra/usuarios.

app.get("/abracadabra/usuarios", function (req, res) {
    let usuarios = JSON.parse(fs.readFileSync("usuarios.json", "utf8"));
    res.send(usuarios);
});

// 4. Crear un middleware con la ruta /abracadabra/juego/:usuario para validar que el usuario recibido como parámetro “usuario” existe en el arreglo de nombres creado en el servidor. En caso de ser exitoso, permitir el paso a la ruta GET correspondiente, de lo contrario devolver la imagen “who.jpeg”

app.use('/abracadabra/juego/:usuario', (req, res, next) => {
    const usersJSON = JSON.parse(fs.readFileSync("usuarios.json", "utf8"));
    const users = usersJSON.usuarios
    const usuario = req.params.usuario;
    console.log(users, usuario)
    var auth = users.find(function (dato) {
        if (dato == usuario) {
            return true
        }
    });
    auth ? next() : res.sendFile(__dirname + '/assets/who.jpeg');


});

app.get('/abracadabra/juego/:usuario', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// 5. Crear una ruta /abracadabra/conejo/:n que valide si el parámetro “n” coincide con el número generado de forma aleatoria. En caso de ser exitoso, devolver la imagen del conejo, de lo contrario devolver la imagen de Voldemort.


app.get("/abracadabra/conejo/:numero", (req, res) => {
    const n = Math.floor(Math.random() * (4 - 1)) + 1;
    const numero = req.params.numero;
    numero == n ?
        res.sendFile(__dirname + '/assets/conejito.jpg') :
        res.sendFile(__dirname + '/assets/voldemort.jpg');

});

// 6. Crear una ruta genérica que devuelva un mensaje diciendo “Esta página no existe...” al consultar una ruta que no esté definida en el servidor.

app.get('*', (req, res) => {
    res.send('<center><h1>&#128520 Esta página no existe...&#128520</h1></center>');
});