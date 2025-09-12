import {connect} from "mongoose";

export default async function mongooseInit() {
const dbUrl = 'mongodb://localhost:27017/movie';
try {
    await connect(dbUrl);
    console.log("Connected to DB");
} catch (err) {
    console.log("Connection to MongoDB failed" + err.message);
}
}