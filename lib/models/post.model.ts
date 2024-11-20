import mongoose, { Schema } from "mongoose";

const PostSchema = new Schema(
    {
        title: { type: String, required: true, trim: true, maxlength: 100 },
        content: { type: String, required: true },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        mood: { type: String },
        reactions: {
            hot: { type: Number, default: 0 },
            funny: { type: Number, default: 0 },
            shock: { type: Number, default: 0 },
        },
        comments: [
            {
                user: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User",
                    required: true,
                },
                text: { type: String, required: true },
                createdAt: { type: Date, default: Date.now },
            },
        ],
        reports: [
            {
                user: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User",
                    required: true,
                },
                reason: { type: String, required: true },
                createdAt: { type: Date, default: Date.now },
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Post = mongoose.models.Post || mongoose.model("Post", PostSchema);

export default Post;
