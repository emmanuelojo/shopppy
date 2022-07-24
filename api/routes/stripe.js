import express from "express";
import { stripePayment } from "../controllers/stripeController.js";

const router = express.Router();

router.post("/", stripePayment);

export default router;
