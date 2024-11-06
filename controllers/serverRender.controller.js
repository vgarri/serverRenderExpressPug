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

const getFilmsForm = async (req, res) => {
    try {
        const title = req.body.title;
        console.log(title);
        res.redirect(`/film/${title}`);
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
}
const getFilmsByTitle = async (req, res) => {
    
    try {
        
        let response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${req.params.title}`);
        let data = await response.json();
        console.log(data);

        res.status(200).render('film.pug', {
            title: data.Title,
            year: data.Year,
            released: data.Released,
            src: data.Poster,
            director: data.Director,
            genre: data.Genre,
            actors: data.Actors




        });
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
}


module.exports = {
    home,
    getFilmsForm,
    getFilmsByTitle
}