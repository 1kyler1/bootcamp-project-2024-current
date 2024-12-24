
// import mongoose from "mongoose";

// const url: string = process.env.MONGO_URI as string;
// let connection: typeof mongoose;

// /**
//  * Makes a connection to a MongoDB database. If a connection already exists, does nothing
//  * Call this function at the start of api routes and data fetches
//  * @returns {Promise<typeof mongoose>}
//  */
// const connectDB = async () => {
//   if (!connection) {
//     connection = await mongoose.connect(url);
//     return connection;
//   }
// };

// export default connectDB;


import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
    if (isConnected) {
        console.log("Database is already connected");
        return;
    }

    if (!process.env.MONGO_URI) {
        throw new Error("Missing MONGO_URI environment variable");
    }

    try {
        const db = await mongoose.connect(process.env.MONGO_URI);
        isConnected = db.connections[0].readyState === 1;
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        throw error;
    }
};

export default connectDB;
