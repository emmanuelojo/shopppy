import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

export const registerUser = async (req, res, next) => {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(req.body.password, salt);

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  });

  const userExists = await User.findOne({ email: req.body.email });

  if (userExists)
    return next(
      res.status(400).json({
        status: 400,
        error: "Email already exists. Proceed to login",
        message: "failed",
      })
    );

  try {
    const savedUser = await newUser.save();

    const { password, ...otherDetails } = savedUser._doc;

    res.status(201).json({
      status: 201,
      data: { ...otherDetails },
      message: "Success",
    });
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user)
      return next(
        res.status(404).json({
          status: 404,
          error: "User not found",
          message: "failed",
        })
      );

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect)
      return next(
        res.status(400).json({
          status: 400,
          error: "Wrong username or password",
          message: "fail",
        })
      );

    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );

    const { password, ...otherDetails } = user._doc;
    res.status(200).json({
      status: 200,
      data: { ...otherDetails },
      access_token: accessToken,
      message: "Success",
    });
  } catch (error) {
    next(error);
  }
};
