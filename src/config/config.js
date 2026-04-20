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

if (!process.env.ACCESS_TOKEN_SECRET) {
    throw new Error("Missing ACCESS_TOKEN_SECRET in environment variables. Please define it in your .env file.");
}
if (!process.env.ACCESS_TOKEN_EXPIRES_IN) {
    throw new Error("Missing ACCESS_TOKEN_EXPIRES_IN in environment variables. Please define it in your .env file.");
}
if (!process.env.REFRESH_TOKEN_SECRET) {
    throw new Error("Missing REFRESH_TOKEN_SECRET in environment variables. Please define it in your .env file.");
}
if (!process.env.REFRESH_TOKEN_EXPIRES_IN) {
    throw new Error("Missing REFRESH_TOKEN_EXPIRES_IN in environment variables. Please define it in your .env file.");
}

const config = {
    PORT: process.env.PORT,
    BASE_URI: process.env.BASE_URI,
    MONGODB_URI: process.env.MONGODB_URI,
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    ACCESS_TOKEN_EXPIRES_IN: process.env.ACCESS_TOKEN_EXPIRES_IN,
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
    REFRESH_TOKEN_EXPIRES_IN: process.env.REFRESH_TOKEN_EXPIRES_IN,
}

export default config;