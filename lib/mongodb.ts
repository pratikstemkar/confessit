import mongoose, { Mongoose } from "mongoose";
import { MongoClient } from "mongodb";

// MongoDB URI and Database Name
const MONGODB_URI = process.env.MONGODB_URI as string;
const MONGODB_DB = process.env.MONGODB_DB as string;

if (!MONGODB_URI) {
    throw new Error(
        "Please define the MONGODB_URI environment variable inside .env.local"
    );
}

if (!MONGODB_DB) {
    throw new Error("Please define the MONGODB_DB environment variable.");
}

// Mongoose Global Object to cache connections in development mode
const globalWithMongoose = global as typeof global & {
    mongoose: { conn: Mongoose | null; promise: Promise<Mongoose> | null };
};

if (!globalWithMongoose.mongoose) {
    globalWithMongoose.mongoose = { conn: null, promise: null };
}

// Function to connect to MongoDB using Mongoose
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

// For MongoDBAdapter, you need to connect using the MongoClient
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
    // In development, we use a global variable to avoid multiple connections on hot reload
    const globalWithMongo = global as typeof globalThis & {
        _mongoClientPromise: Promise<MongoClient>;
    };
    if (!globalWithMongo._mongoClientPromise) {
        client = new MongoClient(MONGODB_URI);
        globalWithMongo._mongoClientPromise = client.connect();
    }
    clientPromise = globalWithMongo._mongoClientPromise;
} else {
    // In production, we directly create the MongoClient
    client = new MongoClient(MONGODB_URI);
    clientPromise = client.connect();
}

// Export both dbConnect (for Mongoose) and clientPromise (for MongoDBAdapter)
export { dbConnect, clientPromise };
