import { Request, Response } from "express";
import {Bienes} from "@models";
import { successResponse, errorResponse } from "@fn";

const deleteBienes = async (req: Request, res: Response) => {

    const { id } = req.params;

    if (!id) {
        return res.status(400).json(errorResponse({ message: "Falta el ID del bien" }));
    }

    try {
        const bien = await Bienes.findByPk(id);

        if (!bien) {
            return res.status(404).json(errorResponse({ message: "Bien no encontrado" }));
        }

        await bien.destroy();

        return res.status(200).json(successResponse({ message: "Bien borrado exitosamente" }));

    } catch (error) {

        console.error("Error al borrar el bien:", error);

        return res.status(500).json(errorResponse({ message: "Error en el servidor" }));
    }
};

export default deleteBienes;