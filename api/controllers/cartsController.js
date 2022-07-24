import Cart from "../models/Cart.js";

export const createCart = async (req, res, next) => {
  const newCart = new Cart(req.body);

  try {
    const savedCart = await newCart.save();

    res.status(200).json({
      status: 200,
      data: savedCart,
      message: "Success",
    });
  } catch (error) {
    next(error);
  }
};

export const getAllCarts = async (req, res, next) => {
  try {
    const carts = await Cart.find().sort({ _id: -1 });

    res.status(200).json({
      status: 200,
      data: carts,
      message: "Success",
    });
  } catch (error) {
    next(error);
  }
};

export const getCart = async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });

    res.status(200).json({
      status: 200,
      data: cart,
      message: "Success",
    });
  } catch (error) {
    next(error);
  }
};

export const updateCart = async (req, res, next) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      status: 200,
      data: updatedCart,
      message: "Success",
    });
  } catch (error) {
    next(error);
  }
};

export const deleteCart = async (req, res, next) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: 200,
      data: "Cart has been deleted",
      message: "Success",
    });
  } catch (error) {
    next(error);
  }
};
