import express from 'express';
import { connectDb } from './config/db.js';
import Product from './models/product.model.js';


const app = express();
app.use(express.json()); 


app.post("/api/products", async (req, res) => {
    const product = req.body;

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({
            success: false,
            message: "Please provide all required fields"
        });
    }
    try {
        // await newProduct.save();
        const newProduct = await Product.create(product);
        res.status(201).json({
            success: true, 
            data: newProduct
        });
    } catch (error) {
        console.log("Error in create product", error.message);
        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
});


app.delete("/api/products/:id", async (req, res) => {
    const {id} = req.params;
    console.log("id:", id);

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: "Product Deleted"
        });
    } catch (error) {
        console.log("Error in deleting the product", error.message);
        res.status(404).json({
            success: false,
            message: "Product Not Found"
        });
    }
});


app.get("/api/products", async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({
            success: true,
            data: products
        })
    } catch (error) {
        console.log("Error in fetching products", error.message);
        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
});

app.listen(5000, () => {
    connectDb();
    console.log("Server Started at URL: http://localhost:5000")
});
