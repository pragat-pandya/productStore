import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const updateProduct = async (req, res) => {
    const {id} = req.params;
    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            success: false,
            message: "Invalid Product ID"
        });
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new:true});
        res.status(200).json({
            success: true,
            data: updatedProduct
        });
    } catch (error) {
        console.log("Error in updating the product", error.message);
        res.status(500).json({
            success: true,
            message: "Server Error"
        })
    }
};

export const createProduct = async (req, res) => {
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
};

export const deleteProduct = async (req, res) => {
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
};

export const getProducts = async (req, res) => {
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
};