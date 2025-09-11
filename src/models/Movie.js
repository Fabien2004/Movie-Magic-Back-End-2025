import { Schema } from 'mongoose';
import { generatePath } from 'react-router';

const movieSchema = new Schema({
    title: { type: String, required: true },
    director: { type: String, required: true },
    genre : { type: String, required: true },
    rating: { type: Number, min: 0, max: 10 },
    year: { type: Number, min: 1888 }, 
    description : { type: String },
    imageUrl: { type: String }

});
const Movie = model('Movie', movieSchema);

export default Movie;