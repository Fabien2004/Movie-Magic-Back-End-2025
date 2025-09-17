import { Schema, model } from "mongoose";

const castSchema = new Schema({
    name: String,
    age: Number,
    born: String,
    imageUrl: String,
    _id : false,
});

const Cast = model('Cast', castSchema);

export default Cast;
