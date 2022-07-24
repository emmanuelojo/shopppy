import express from "express";
import {
  createProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productsController.js";

import {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../utils/VerifyToken.js";

const router = express.Router();

router.post("/", verifyTokenAndAdmin, createProduct);

router.get("/", getAllProducts);

// router.get("/find/:id", verifyTokenAndAdmin, getProduct);

router.get("/:id", getProduct);

router.put("/:id", verifyTokenAndAdmin, updateProduct);

router.delete("/:id", verifyTokenAndAdmin, deleteProduct);

// router.get("/stats", verifyTokenAndAdmin, usersStats);

export default router;
