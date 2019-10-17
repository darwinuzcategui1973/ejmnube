const express = require('express');
const app = express();

const Tarea = require('./modelos/tareaModelo');

// configuraciones
app.set('views', __dirname + '/vistas');
app.set('view engine','ejs');

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// rutas
app.get('/',async (req, res) =>{
    const tareasDB = await Tarea.find();
    console.log(tareasDB);
    res.render('index',{tareasDB});
})


// crear un aruta crear tarea

app.post('/crear', async (req, res) => {
    //	console.log(req.body);
    const nuevaTarea = new Tarea({
        tarea: req.body.tarea,
        descripcion: req.body.descripcion
    });
    console.log(nuevaTarea);
    await nuevaTarea.save();
    // res.send('resivido');
    res.redirect('/');// me direcciona a una ruta en esta caso a la inicial


})


app.use(express.static(__dirname + '/public'));
//app.get('/', ( req, res) => {
//    res.send('Hola darwin mi SErvidor');
//});

module.exports = app;


