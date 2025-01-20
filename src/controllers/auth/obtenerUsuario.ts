import { Request, Response } from "express";
import { successResponse, errorResponse } from "@fn";

const obtenerUsuario = async (req: Request, res: Response) => {
    try {
        const usuario = req.body.user;

        if (!usuario) {
            return res.status(404).json(
                errorResponse({ message: "Usuario no encontrado" })
            );
        }

        return res.status(200).json(
            successResponse({
                message: "sesion recuperada",
                usuario: {
                    id: usuario.id,
                    nombreyapellido: usuario.nombreyapellido,
                    email: usuario.email,
                    role: usuario.role,
                },
            })
        );

    } catch (error) {
        console.error("Error al obtener el usuario:", error);
        return res.status(500).json(errorResponse({ message: "Error en el servidor" }));
    }
};

export default obtenerUsuario;