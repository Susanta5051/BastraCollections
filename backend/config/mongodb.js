import mongoose from "mongoose";

const connectDB= async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/e-commerce`);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
}

export default connectDB;