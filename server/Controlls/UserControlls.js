import { registerSchema } from "../Zod/UserVaild.js";
import UserModel from "../Model/UserModel.js";

import bcrypt from "bcrypt";

export const regsiter = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Validate the data
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please enter all fields" });
    }

    const validation = registerSchema.safeParse({
      name: name,
      email: email,
      password: password,
    });
    if (!validation.success) {
      const errorMessages = validation.error.errors.reduce((acc, err) => {
        acc[err.path[0]] = err.message;
        return acc;
      }, {});
      return res.status(400).json({
        errors: errorMessages,
      });
    }

    const preuser = await UserModel.findOne({ email: email });
    if (preuser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const HashPassword = await bcrypt.hash(password, 12);

    const newuser = UserModel.create({
      name,
      email,
      password: HashPassword,
    });

    await newuser.save;
    return res.status(200).json({
      message: "user created successfully",
      newuser: newuser,
    });
  } catch (error) {}
};
