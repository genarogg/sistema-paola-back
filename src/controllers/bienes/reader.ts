import { Request, Response } from "express";
import { Bienes } from "@models";

const getBienes = async (req: Request, res: Response) => {
    try {
        const bienes = await Bienes.findAll();

        return res.status(200).json({ data: bienes });
        
    } catch (error) {
        console.error("Error al obtener los bienes:", error);
        return res.status(500).json({ message: "Error en el servidor" });
    }
};

export default getBienes;