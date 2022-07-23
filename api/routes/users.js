import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/usersController.js";
import {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../utils/VerifyToken.js";

const router = express.Router();

router.get("/", verifyTokenAndAdmin, getAllUsers);

// router.get("/find/:id", verifyTokenAndAdmin, getUser);

router.get("/:id", verifyTokenAndAdmin, getUser);

router.put("/:id", verifyTokenAndAuthorization, updateUser);

router.delete("/:id", verifyTokenAndAdmin, deleteUser);

export default router;
