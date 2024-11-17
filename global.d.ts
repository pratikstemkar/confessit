// global.d.ts
import type { Mongoose } from "mongoose";

declare global {
    // Declare a global mongoose variable to cache the connection
    namespace NodeJS {
        interface Global {
            mongoose: {
                conn: Mongoose | null;
                promise: Promise<Mongoose> | null;
            };
        }
    }
}

export {};
