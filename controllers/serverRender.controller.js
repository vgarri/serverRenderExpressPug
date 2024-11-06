require('dotenv').config();
const apiKey = process.env.API_KEY
const home = (req, res) => {
    try {
        res.status(200).render("home.pug");
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
}
const film = (req, res) => {
    try {
        res.status(200).render("film.pug");
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
}
const getfilms = async (req, res) => {
    try {

        let response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${req.body.title}`);
        let data = await response.json();
        

        res.status(200).render('film.pug', {
            title: data.Title
        });
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
}
const getFilmsByTitle = async (req, res) => {
    console.log(req.params.title);
    try {
        let title = req.params.title;
        console.log(title)
        let response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`);
        let data = await response.json();
        console.log(data);

        res.status(200).render('film.pug', {
            title: data.Title
        });
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
}


module.exports = {
    home,
    film,
    getfilms,
    getFilmsByTitle
}