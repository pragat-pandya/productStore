import express from 'express';
import { connectDb } from './config/db.js';
import productRoutes from "./routes/product.routes.js";

const app = express();
app.use(express.json()); 
app.use("/api/products", productRoutes);


app.listen(5000, () => {
    connectDb();
    console.log("Server Started at URL: http://localhost:5000")
});
