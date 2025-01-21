import { Request, Response } from "express";
import { Departamento } from "@models";

const getDepartamentos = async (req: Request, res: Response) => {
    try {
        const departamentos = await Departamento.findAll();

        return res.status(200).json({ data: departamentos });
    } catch (error) {
        console.error("Error al obtener los departamentos:", error);
        return res.status(500).json({ message: "Error en el servidor" });
    }
};

export default getDepartamentos;