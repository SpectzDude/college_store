

import express from "express";
import { login, register } from "../controllers/auth/auth";

const router = express.Router();

// API routes
router.use("/login", login);
router.use("/register", register);

export default router;
