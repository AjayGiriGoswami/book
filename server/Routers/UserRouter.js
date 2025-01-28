import express from "express";
import { regsiter } from "../Controlls/UserControlls.js";
const route = express.Router();

// user routes

route.post("/register", regsiter)

export default route