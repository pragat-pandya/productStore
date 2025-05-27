import express from "express";
import {deleteProduct, getProducts, createProduct, updateProduct} from "../controllers/product.controller.js"



const router = express.Router();


// CREATE
router.post("/", createProduct);

// READ
router.get("/", getProducts);

// UPDATE
router.put("/:id", updateProduct);

// DELETE
router.delete("/:id", deleteProduct);


export default router;