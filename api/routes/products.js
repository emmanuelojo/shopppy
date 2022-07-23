import express from "express";

const router = express.Router();

router.post("/", (req, res, next) => {
  res.send("Test is successful");
});

router.get("/", (req, res, next) => {
  res.send("Test is successful");
});

router.get("/:id", (req, res, next) => {
  res.send("Test is successful");
});

router.patch("/", (req, res, next) => {
  res.send("Test is successful");
});

router.delete("/:id", (req, res, next) => {
  res.send("Test is successful");
});

export default router;
