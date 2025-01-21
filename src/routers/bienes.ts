import express from "express";
import {
    createBienes,
    getBieness,
    deleteBienes,
    updateBienes
} from "@controller";
import { verificarToken } from "@fn"

const router = express.Router();

router.post("/create", verificarToken, createBienes)

router.get("/get", getBieness)

router.delete("/delete/:id", verificarToken, deleteBienes)

router.put("/update/:id", verificarToken, updateBienes)

export default router;