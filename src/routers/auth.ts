import express from "express";
import { registerPost, loginPost, obtenerUsuario } from "@controller";
import { verificarToken } from "@fn"

const router = express.Router();

router.post("/register", registerPost);

router.post("/login", loginPost);

router.post("/obtenerUsuario", verificarToken, obtenerUsuario)

export default router;