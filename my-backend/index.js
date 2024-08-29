const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./MongoDb/Connect");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get("/", async (req, res) => {
    res.send('Hello from Dall-E')
});

const startServer = async () => {
    try {
        connectDB(process.env.MONGO_DB);
        app.listen(5000, () => {
            console.log("Server has started on port http://localhost:5000");
        })
    } catch (error) {
        console.log(error);
    }
}

startServer();