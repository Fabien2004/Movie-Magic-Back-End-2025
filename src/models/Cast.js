import { Schema, model } from "mongoose";

const castSchema = new Schema({
     name: {
        type: String,
        required: [true, 'Cast Name is required'],
        validate: [/^[A-Za-z0-9 ]+$/, 'Name can contain only alpha numeric characters!'],
    },
    age: {
        type: Number,
        required: [true, 'Cast Age is required'],
        min: [1, 'The age must be higher than 1 years old'],
        max: [120, 'The age must be lower than 120 years old'],
    },
    born: {
        type: String,
        required: [true, 'Cast Born is required'],
        minLength: [10, 'The place of born must be at least 10 characters'], 
        validate: [/^[A-Za-z0-9 ]+$/, 'Born can contain only alpha numeric characters!'],
    },
    imageUrl: {
        type: String,
        required: [true, 'Cast imageurl is required'],
       // validate: [/^https?:\/\//, 'Invalid image url!'],
    },
});

const Cast = model('Cast', castSchema);

export default Cast;
