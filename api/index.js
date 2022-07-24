import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import productRoutes from "./routes/products.js";
import cartRoutes from "./routes/carts.js";
import orderRoutes from "./routes/orders.js";
import stripeRoutes from "./routes/stripe.js";
import cors from "cors";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongDB...");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected!");
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected!");
});

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to Shoppy");
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/carts", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/payment", stripeRoutes);

app.listen(PORT, () => {
  connect();
  console.log(`Server running on port ${PORT}`);
});
