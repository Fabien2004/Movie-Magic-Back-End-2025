import { Schema, model } from 'mongoose';


const movieSchema = new Schema({
    title: String,
    director: String,
    genre : String,
    rating: Number,
    year: Number, 
    description : String,
    imageUrl: String,

});
const Movie = model('Movie', movieSchema);

export default Movie;