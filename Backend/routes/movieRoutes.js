import express from 'express';
const router = express.Router();
import {addMovie,displayMovie} from '../controllers/movieController.js'


router.post('/addMovies',addMovie);
router.get('/',displayMovie);


export default router;