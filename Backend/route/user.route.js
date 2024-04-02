import express from "express";
import { signup,login } from "../controller/user.controller.js";


const router = express.Router();

// Define route for user signup
router.post("/signup", signup);
router.post("/login", login);

export default router;
