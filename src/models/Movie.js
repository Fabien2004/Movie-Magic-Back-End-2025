import { Schema, model, Types } from 'mongoose';

const movieSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Movie Title is required!'],
        minLength: [5, 'The title must be at least 5 characters'],
        validate: [/^[A-Za-z0-9 ]+$/, 'Title can contain only alpha numeric characters!'],
    },
    genre: {
        type: String,
        required: [true, 'Movie Genre is required'],
        minLength: [5, 'The genre must be at least 5 characters'],
        lowercase: [true, 'The genre must contains lowercase characters'],
        validate: [/^[A-Za-z0-9 ]+$/, 'Genre can contain only alpha numeric characters!'],
    },
    director: {
        type: String,
        minLength: [5, 'The director must be at least 5 characters'],
        validate: [/^[A-Za-z0-9 ]+$/, 'Director can contain only alpha numeric characters!'],
        required: [true, 'Movie Director is required'],
    },
    year: {
        type: Number,
        required: [true, 'Movie Year is required'],
        min: [1888, 'Cannot add movies older than 1888 year!'],
        max: [2050, 'Cannot add movies after 2050!'],
    },
    rating: {
        type: Number,
        required: [true, 'Movie Rating is required'],
        min: [1, 'Rating should be at least 1!'],
        max: [10, 'Rating cannot be higher than 10!'], 
    },
    description: {
        type: String,
        required: [true, 'Movie Description is required'],
        validate: [/^[A-Za-z0-9 ]+$/, 'Description can contain only alpha numeric characters!'],
        minLength: [20, 'Description should be at least 20 characters long!']
    },
    imageUrl: {
        type: String,
        required: [true, 'Movie imageUrl is required'],
       // validate: [/^https?:\/\//, 'Invalid image url!'],
    },
    casts: [{
        character: {
            type: String,
            minLength: 5,
            validate: [/^[A-Za-z0-9 ]+$/, 'Character can contain only alpha numeric characters!'],
        },
        cast: {
            type: Types.ObjectId, 
            ref: 'Cast'
        },
    }],
    owner: {
        type: Types.ObjectId,
        ref: 'User',
    }
});

const Movie = model('Movie', movieSchema);

export default Movie;
