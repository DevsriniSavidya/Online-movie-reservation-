import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const movieSchema = new Schema({

    name:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
     showTime:{
        type:String,
        required:true,
        trim:true
    },
    cast:[{
        type:String,
        required:true
    }]

   
},{timestamps:true})


const Movie = mongoose.model('Movie',movieSchema);
export default Movie;

