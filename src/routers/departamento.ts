import express from "express";
import { createDepartamento, getDepartamentos, deleteDepartamento, updateDepartamento } from "@controller";
import { verificarToken } from "@fn"

const router = express.Router();

router.post("/create", verificarToken, createDepartamento)

router.get("/get", getDepartamentos)

router.delete("/delete/:id", verificarToken, deleteDepartamento)

router.put("/update/:id", verificarToken, updateDepartamento)

export default router;