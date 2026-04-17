import dotenv from "dotenv";
dotenv.config();

if (!process.env.PORT) {
    throw new Error("Missing PORT in environment variables. Please define it in your .env file.");
}

if (!process.env.BASE_URI) {
    throw new Error("Missing BASE_URI in environment variables. Please define it in your .env file.");
}

if (!process.env.MONGODB_URI) {
    throw new Error("Missing MONGODB_URI in environment variables. Please define it in your .env file.");
}

const config = {
    PORT: process.env.PORT,
    BASE_URI: process.env.BASE_URI,
    MONGODB_URI: process.env.MONGODB_URI,
}

export default config;