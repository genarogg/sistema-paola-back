import { Request, Response } from "express";
import { Departamento, Bitacora } from "@models";
import { successResponse, errorResponse } from "@fn";

const createDepartamento = async (req: Request, res: Response) => {

    if (req.body.user.role !== "admin") {
        return res.status(403).json(errorResponse({ message: "No tienes permisos para crear un departamento" }));
    }

    const { clasificacion, departamento, dependencia } = req.body;

    // Validar campos obligatorios
    if (!clasificacion || !departamento || !dependencia) {
        return res.status(400).json(errorResponse({ message: "Faltan campos obligatorios" }));
    }

    try {
        const depar = await Departamento.create({
            clasificacion,
            departamento,
            dependencia,
        });

        await Bitacora.create({
            usuario: req.body.user.id,
            accion: `Departamento: ${depar.departamento} creado`,
        })


        return res.status(201).json(successResponse({ message: "Departamento creado exitosamente" }));

    } catch (error) {

        console.error("Error al crear el departamento:", error);

        return res.status(500).json(errorResponse({ message: "Error en el servidor" }));
    }
};

export default createDepartamento;