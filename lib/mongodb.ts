// lib/mongodb.ts
import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
    throw new Error(
        "Please define the MONGODB_URI environment variable inside .env.local"
    );
}

// Add explicit typing to global.mongoose to avoid `any` type
const globalWithMongoose = global as typeof global & {
    mongoose: { conn: Mongoose | null; promise: Promise<Mongoose> | null };
};

if (!globalWithMongoose.mongoose) {
    globalWithMongoose.mongoose = { conn: null, promise: null };
}

async function dbConnect(): Promise<Mongoose> {
    if (globalWithMongoose.mongoose.conn) {
        return globalWithMongoose.mongoose.conn;
    }

    if (!globalWithMongoose.mongoose.promise) {
        globalWithMongoose.mongoose.promise = mongoose
            .connect(MONGODB_URI)
            .then(mongoose => mongoose);
    }

    globalWithMongoose.mongoose.conn = await globalWithMongoose.mongoose
        .promise;
    return globalWithMongoose.mongoose.conn;
}

export default dbConnect;
