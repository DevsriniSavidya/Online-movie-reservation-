import express from 'express';
const router = express.Router();
import {addMovie} from '../controllers/movieController.js'


router.post('/addMovies',addMovie);


export default router;