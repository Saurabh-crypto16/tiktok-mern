import mongoose from "mongoose";

//schema tell the database what kind of datastructure to expect
const tiktokSchema=mongoose.Schema({
    url: String,
    channel: String,
    song: String,
    likes: String,
    messages: String,
    description: String,
    shares: String,
});

//Collection inside the database
export default mongoose.model('tiktokVideos',tiktokSchema);