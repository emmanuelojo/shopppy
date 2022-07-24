import express from "express";
import {
  createCart,
  deleteCart,
  getAllCarts,
  getCart,
  updateCart,
} from "../controllers/cartsController.js";
import {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../utils/VerifyToken.js";

const router = express.Router();

router.post("/", verifyTokenAndAuthorization, createCart);

router.get("/", verifyTokenAndAdmin, getAllCarts);

router.get("/:userId", verifyTokenAndAuthorization, getCart);

router.put("/:id", verifyTokenAndAuthorization, updateCart);

router.delete("/:id", verifyTokenAndAuthorization, deleteCart);

export default router;
