const express = require('express') //importamos paquete express
const app = express() // inicializar servidor con express
const port = 3000;


const morgan = require("./middlewares/morgan")
// Logger
app.use(morgan(':method :url :status - :response-time ms :body'));
app.use(express.json()); // Middleware para parsear el body de las peticiones
app.use(express.urlencoded({ extended: false }));
//habilitar static
app.use(express.static('public'));//middleware para servir archivos estáticos de front: CSS, JS, Assets

//PUG views
app.set('view engine', 'pug');
app.set('views','./views');

const serverRenderRoutes = require("./routes/serverRender.routes.js")

app.use('/', serverRenderRoutes);

// app.use('/film', serverRenderRoutes);
// app.use('/film/title', serverRenderRoutes);


app.listen(port, () => {
    console.log(`serverRender listening on http://localhost:${port}`)
});