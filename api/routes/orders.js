import express from "express";
import {
  createOrder,
  deleteOrder,
  getAllOrders,
  getUserOrders,
  incomeStats,
  updateOrder,
} from "../controllers/ordersController.js";
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../utils/VerifyToken.js";

const router = express.Router();

router.post("/", verifyToken, createOrder);

router.get("/", verifyTokenAndAdmin, getAllOrders);

router.get("/find/:userId", verifyTokenAndAuthorization, getUserOrders);

router.put("/:id", verifyTokenAndAdmin, updateOrder);

router.delete("/:id", verifyTokenAndAdmin, deleteOrder);

router.get("/income", verifyTokenAndAdmin, incomeStats);

export default router;
