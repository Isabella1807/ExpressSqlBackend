import express from "express";
import {showAllProducts} from "../controllers/productController.js";
import {showProductByID} from "../controllers/productController.js";

const router = express.Router();
router.get("/products", showAllProducts);
router.get("/products/:id", showProductByID);

export default router;