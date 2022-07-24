import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
  usersStats,
} from "../controllers/usersController.js";
import {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../utils/VerifyToken.js";

const router = express.Router();

router.get("/", verifyTokenAndAdmin, getAllUsers);

router.get("/find/:id", verifyTokenAndAdmin, getUser);

router.put("/:id", verifyTokenAndAuthorization, updateUser);

router.delete("/:id", verifyTokenAndAdmin, deleteUser);

router.get("/stats", verifyTokenAndAdmin, usersStats);

export default router;
