import bcrypt from "bcrypt";
import User from "../models/User.js";

export const getAllUsers = async (req, res, next) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();

    let modifiedUsers = [];

    users.forEach((user) => {
      const { password, ...otherDetails } = user._doc;
      user = { ...otherDetails };
      modifiedUsers.push(user);
    });

    res.status(200).json({
      status: 200,
      data: modifiedUsers,
      message: "Success",
    });
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    const { password, ...otherDetails } = user._doc;

    res.status(200).json({
      status: 200,
      data: { ...otherDetails },
      message: "Success",
    });
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  if (req.body.password.length) {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    req.body.password = hashedPassword;
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      status: 200,
      data: updatedUser,
      message: "Success",
    });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: 200,
      data: "User has been deleted",
      message: "Success",
    });
  } catch (error) {
    next(error);
  }
};

export const usersStats = async (req, res, next) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);

    res.status(200).json({
      status: 200,
      data: data,
      message: "Success",
    });
  } catch (error) {
    next(error);
  }
};
