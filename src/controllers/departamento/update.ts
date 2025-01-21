import { Request, Response } from "express";
import { Departamento } from "@models";
import { successResponse, errorResponse } from "@fn";

const updateDepartamento = async (req: Request, res: Response) => {
    try {
        if (req.body.user.role !== "admin") {
            return res.status(403).json(errorResponse({ message: "No tienes permisos para actualizar un departamento" }));
        }

        const { id } = req.params;
        const { clasificacion, departamento, dependencia, cantidad, costo_total } = req.body;

        // Validar campos obligatorios
        if (!clasificacion || !departamento || !dependencia || !cantidad || !costo_total) {
            return res.status(400).json(errorResponse({ message: "Faltan campos obligatorios" }));
        }

        const departamentoExistente = await Departamento.findByPk(id);
        if (!departamentoExistente) {
            return res.status(404).json(errorResponse({ message: "Departamento no encontrado" }));
        }

        // Actualizar los campos del departamento
        await departamentoExistente.update({
            clasificacion,
            departamento,
            dependencia,
            cantidad,
            costo_total,
        });

        return res.status(200).json(successResponse({ message: "Departamento actualizado exitosamente", departamento: departamentoExistente }));

    } catch (error) {
        console.error("Error al actualizar el departamento:", error);
        return res.status(500).json(errorResponse({ message: "Error en el servidor" }));
    }
};

export default updateDepartamento;