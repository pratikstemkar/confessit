// lib/models/user.model.ts
import mongoose, { Schema } from "mongoose";

// Define the User schema
const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    bio: { type: String, required: true },
    password: { type: String, required: true },
    location: { type: String },
    from: { type: String },
    music: { type: String },
    movie: { type: String },
    createdAt: { type: Date, default: Date.now },
});

// Create the model
const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
