import { Request, Response } from "express";
import { Bienes } from "@models";
import { successResponse, errorResponse } from "@fn";

const createBienes = async (req: Request, res: Response) => {

    const { grupo, subgrupo, seccion, concepto_movimiento, cantidad, numero_identificacion, nombre, marca, modelo, serial, incorporaciones, desincorporaciones, observaciones, departamento } = req.body;

    // Validar campos obligatorios
    if (!grupo || !subgrupo || !seccion || !concepto_movimiento || !cantidad || !numero_identificacion || !nombre || !marca || !modelo || !serial || !departamento) {
        return res.status(400).json(errorResponse({ message: "Faltan campos obligatorios" }));
    }

    try {
        await Bienes.create({
            grupo,
            subgrupo,
            seccion,
            concepto_movimiento,
            cantidad,
            numero_identificacion,
            nombre,
            marca,
            modelo,
            serial,
            incorporaciones,
            desincorporaciones,
            observaciones,
            departamento,
        });

        return res.status(201).json(successResponse({ message: "Bien creado exitosamente" }));

    } catch (error) {

        console.error("Error al crear el bien:", error);

        return res.status(500).json(errorResponse({ message: "Error en el servidor" }));
    }
};

export default createBienes;