

import express from "express";
import { getProfile, login, register } from "../controllers/auth/auth.js";
import { verifyToken } from "../middlewares/index.js";

const router = express.Router();

// API routes
router.use("/login", login);
router.use("/register", register);
router.use("/profile", verifyToken, getProfile);

export default router;
