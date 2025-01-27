import { Request, Response } from "express";
import { Bienes, Bitacora, Departamento } from "@models";
import { successResponse, errorResponse } from "@fn";


const createBienes = async (req: Request, res: Response) => {

    console.log(req.body);

    const { grupo, subgrupo, seccion, cantidad, numero_identificacion, nombre, marca, modelo, serial, incorporaciones, observaciones, departamento } = req.body;

    // Validar campos obligatorios
    if (!grupo || !subgrupo || !seccion || !cantidad || !numero_identificacion || !nombre || !marca || !modelo || !serial || !departamento || !incorporaciones) {
        return res.status(400).json(errorResponse({ message: "Faltan campos obligatorios" }));
    }

    try {
        const bien = await Bienes.create({
            grupo,
            subgrupo,
            seccion,

            cantidad,
            numero_identificacion,
            nombre,
            marca,
            modelo,
            serial,
            incorporaciones,

            observaciones,
            departamento,
        });


        // buscar el departamento por id
        const dep = await Departamento.findByPk(departamento);
        if (dep) {
            dep.cantidad += cantidad;
            dep.costo_total += incorporaciones;
            await dep.save();
        }





        return res.status(201).json(successResponse({ message: "Bien creado exitosamente" }));

    } catch (error) {

        console.error("Error al crear el bien:", error);

        return res.status(500).json(errorResponse({ message: "Error en el servidor" }));
    }
};

export default createBienes;