import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    categories: {
      type: Array,
    },
    size: {
      type: [String],
    },
    colour: {
      type: [String],
    },
    price: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
