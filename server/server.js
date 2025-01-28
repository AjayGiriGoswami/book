import express from "express";
const app = express();
import dotenv from "dotenv";
import mongoose from "mongoose";
import route from "./Routers/UserRouter.js";
dotenv.config();
const PORT = process.env.PORT || 2000;
const db = process.env.MONGO_URL;

// Database Connection
try {
  mongoose.connect(db);
  console.log("MongoDb Connection started");
} catch (error) {
  console.log("Something went wrong", error);
}

// routers
app.use("/api/auth", route)

app.listen(PORT, () => {
  console.log(`Server Started`);
});
