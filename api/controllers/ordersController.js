import Order from "../models/Order.js";

export const createOrder = async (req, res, next) => {
  const newOrder = new Order(req.body);

  try {
    const savedOrder = await newOrder.save();

    res.status(200).json({
      status: 200,
      data: savedOrder,
      message: "Success",
    });
  } catch (error) {
    next(error);
  }
};

export const getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.find().sort({ _id: -1 });

    res.status(200).json({
      status: 200,
      data: orders,
      message: "Success",
    });
  } catch (error) {
    next(error);
  }
};

export const getUserOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({ userId: req.params.userId }).sort({
      _id: -1,
    });

    res.status(200).json({
      status: 200,
      data: orders,
      message: "Success",
    });
  } catch (error) {
    next(error);
  }
};

export const updateOrder = async (req, res, next) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      status: 200,
      data: updatedOrder,
      message: "Success",
    });
  } catch (error) {
    next(error);
  }
};

export const deleteOrder = async (req, res, next) => {
  try {
    await Order.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: 200,
      data: "Order has been deleted",
      message: "Success",
    });
  } catch (error) {
    next(error);
  }
};

export const incomeStats = async (req, res, next) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(date.setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);

    res.status(200).json({
      status: 200,
      data: income,
      message: "Success",
    });
  } catch (error) {
    next(error);
  }
};
