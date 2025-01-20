import express from "express";
import { registerPost, loginPost } from "@controller";
import { verificarToken } from "@fn";

const router = express.Router();

router.post("/register", verificarToken, registerPost);

router.post("/login", loginPost);

export default router;