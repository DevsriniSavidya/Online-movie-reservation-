import Movie from '../models/Movies.js'


export const addMovie = async (req,res) =>{

         const name = req.body.name;
         const description = req.body.description;
         const showTime = req.body.showTime;

         const newMovie = new Movie({name,description,showTime})

         try{

            await newMovie.save()
            return res.status(200).json("Movie Added");

         }catch (err){
            
            return res.status(500).json(err);

         }




}