import Movie from '../models/Movies.js'


export const addMovie = async (req,res) =>{

         const name = req.body.name;
         const description = req.body.description;
         const showTime = req.body.showTime;
         const theaters = req.body.theaters;
         const photo = req.body.photo;

         const newMovie = new Movie({name,description,showTime,theaters,photo})

         try{

            await newMovie.save()
            return res.status(200).json("Movie Added");

         }catch (err){
            
            return res.status(500).json(err);

         }
}

export const displayMovie = async (req,res) => {

  Movie.find().then((data)=>{
     res.json(data);
     
  }).catch((err)=>{

     console.catch.log(err);
  })

}