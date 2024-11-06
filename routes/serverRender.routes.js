const serverRenderController = require('../controllers/serverRender.controller');
const router = require('express').Router();
router.get("/", serverRenderController.home);
router.get("/film/:title", serverRenderController.getFilmsByTitle);
router.post("/film/", serverRenderController.getfilms);


module.exports = router;