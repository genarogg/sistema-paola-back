import { Request, Response } from "express";
import { Bienes } from "@models";
import { successResponse, errorResponse } from "@fn";

const updateBienes = async (req: Request, res: Response) => {
    try {
  
        const { id } = req.params;
        const { grupo, subgrupo, seccion, concepto_movimiento, cantidad, numero_identificacion, nombre, marca, modelo, serial, incorporaciones, desincorporaciones, observaciones, departamento } = req.body;

        // Validar campos obligatorios
        if (!grupo || !subgrupo || !seccion || !concepto_movimiento || !cantidad || !numero_identificacion || !nombre || !marca || !modelo || !serial || !departamento) {
            return res.status(400).json(errorResponse({ message: "Faltan campos obligatorios" }));
        }

        const bienExistente = await Bienes.findByPk(id);
        if (!bienExistente) {
            return res.status(404).json(errorResponse({ message: "Bien no encontrado" }));
        }

        // Actualizar los campos del bien
        await bienExistente.update({
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

        return res.status(200).json(successResponse({ message: "Bien actualizado exitosamente", bien: bienExistente }));

    } catch (error) {
        console.error("Error al actualizar el bien:", error);
        return res.status(500).json(errorResponse({ message: "Error en el servidor" }));
    }
};

export default updateBienes;