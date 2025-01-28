import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  cart: [
    {
      productId: mongoose.Schema.Types.ObjectId,
      quantity: Number,
    },
  ],
  orders: [
    {
      orderId: mongoose.Schema.Types.ObjectId,
      orderDate: Date,
      products: [
        {
          productId: mongoose.Schema.Types.ObjectId,
          quantity: Number,
        },
      ],
      totalPrice: Number,
    },
  ],
});

const UserModel = await mongoose.model("User", userSchema);
export default UserModel;
