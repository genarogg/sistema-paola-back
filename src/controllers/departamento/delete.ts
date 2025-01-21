import { Request, Response } from "express";
import Departamento from "../../models/Departamento";
import { successResponse, errorResponse } from "@fn";

const deleteDepartamento = async (req: Request, res: Response) => {

    if (req.body.user.role !== "admin") {
        return res.status(403).json(errorResponse({ message: "No tienes permisos para borrar un departamento" }));
    }

    const { id } = req.params;

    try {
        const departamentoExistente = await Departamento.findByPk(id);
        if (!departamentoExistente) {
            return res.status(404).json(errorResponse({ message: "Departamento no encontrado" }));
        }

        await departamentoExistente.destroy();
        return res.status(200).json(successResponse({ message: "Departamento borrado exitosamente" }));

    } catch (error) {
        console.error("Error al borrar el departamento:", error);
        return res.status(500).json(errorResponse({ message: "Error en el servidor" }));
    }
};

export default deleteDepartamento;