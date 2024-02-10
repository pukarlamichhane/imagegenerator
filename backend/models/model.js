import mongoose from "mongoose";

const model =new mongoose.Schema({
    name: { type: String, required: true },
    prompt: { type: String, required: true },
    photo: { type: String, required: true },
})

export  const post =mongoose.model("Post",model);
