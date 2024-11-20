import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
    {
        username: { type: String, required: true, unique: true },
        bio: { type: String },
        password: { type: String, required: true },
        location: { type: String },
        from: { type: String },
        music: { type: String },
        movie: { type: String },
        gender: { type: String },
        avatar: { type: String },
        bookmarks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
        roles: { type: [String], default: ["user"] },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
