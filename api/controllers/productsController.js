import Product from "../models/Product.js";

export const createProduct = async (req, res, next) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();

    res.status(200).json({
      status: 200,
      data: savedProduct,
      message: "Success",
    });
  } catch (error) {
    next(error);
  }
};

export const getAllProducts = async (req, res, next) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;

  try {
    let products;
    if (qNew) {
      products = await Product.find().sort({ _id: -1 }).limit(3);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      }).sort({ _id: -1 });
    } else if (qNew && qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      })
        .sort({ _id: -1 })
        .limit(1);
    } else {
      products = await Product.find().sort({ _id: -1 });
    }

    // const products = query
    //   ? await Product.find().sort({ _id: -1 }).limit(5)
    //   : await Product.find().sort({ _id: -1 });

    res.status(200).json({
      status: 200,
      data: products,
      message: "Success",
    });
  } catch (error) {
    next(error);
  }
};

export const getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    res.status(200).json({
      status: 200,
      data: product,
      message: "Success",
    });
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      status: 200,
      data: updatedProduct,
      message: "Success",
    });
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: 200,
      data: "Product has been deleted",
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
