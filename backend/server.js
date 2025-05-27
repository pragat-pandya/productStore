import express from 'express';
import { connectDb } from './config/db.js';
const app = express();

app.get("/", (req, res) => {
    res.send("Server is ready!");
})

app.listen(5000, () => {
    connectDb();
    console.log("Server Started at URL: http://localhost:5000")
});
