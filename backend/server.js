import express from 'express';
import { connectDb } from './config/db.js';
import productRoutes from "./routes/product.routes.js";

const app = express();
app.use(express.json()); 
app.use("/api/products", productRoutes);

const PORT = process.env.PORT||5000;

app.listen(PORT, () => {
    connectDb();
    console.log("Server Started at URL: http://localhost:"+PORT)
});
