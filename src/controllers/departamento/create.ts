import { Request, Response } from "express";
import { Departamento } from "@models";
import { successResponse, errorResponse } from "@fn";

const createDepartamento = async (req: Request, res: Response) => {

    if (req.body.user.role !== "admin") {
        return res.status(403).json(errorResponse({ message: "No tienes permisos para crear un departamento" }));
    }

    const { clasificacion, departamento, dependencia, cantidad, costo_total } = req.body;

    // Validar campos obligatorios
    if (!clasificacion || !departamento || !dependencia || !cantidad || !costo_total) {
        return res.status(400).json(errorResponse({ message: "Faltan campos obligatorios" }));
    }

    try {
        await Departamento.create({
            clasificacion,
            departamento,
            dependencia,
            cantidad,
            costo_total,
        });

        return res.status(201).json(successResponse({ message: "Departamento creado exitosamente" }));

    } catch (error) {

        console.error("Error al crear el departamento:", error);

        return res.status(500).json(errorResponse({ message: "Error en el servidor" }));
    }
};

export default createDepartamento;