import express from "express";
import dns from "dns";
import cors from "cors";
import cookieParser from "cookie-parser";
import config from "./config/config.js";

dns.setServers([
    "1.1.1.1",
    "8.8.8.8"
]);

const app = express();

app.use(cors({
    origin: config.BASE_URI,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
})
);

app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(cookieParser());
app.use(express.static("public"));


export default app;