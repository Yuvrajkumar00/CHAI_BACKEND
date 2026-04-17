import connectDB from "./db/index.js";
import config from "./config/config.js";
import app from "./app.js";

const PORT = config.PORT || 8000;

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`App is running on the PORT: ${PORT}`);
        })
    })
    .catch((error) => {
        console.log("MONGODB Connection Failed!!");
    })