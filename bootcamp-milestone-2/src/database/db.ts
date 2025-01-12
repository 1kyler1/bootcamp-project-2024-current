
// import mongoose from "mongoose";

// let isConnected = false;

// const connectDB = async () => {
//     if (isConnected) {
//         console.log("Database is already connected");
//         return;
//     }

//     if (!process.env.MONGO_URI) {
//         throw new Error("Missing MONGO_URI environment variable");
//     }

//     try {
//         const db = await mongoose.connect(process.env.MONGO_URI);
//         isConnected = db.connections[0].readyState === 1;
//         console.log("Connected to MongoDB");
//     } catch (error) {
//         console.error("Failed to connect to MongoDB:", error);
//         throw error;
//     }
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
        console.error("Missing MONGO_URI environment variable");
        throw new Error("Missing MONGO_URI environment variable");
    }

    try {
        console.log("Connecting to MongoDB...");
        const db = await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000,
        });

        isConnected = db.connections[0].readyState === 1;

        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        throw error;
    }
};

export default connectDB;
