import { Request, Response } from "express";
import { User, Bitacora } from "@models";
import { encriptarContrasena, successResponse, errorResponse } from "@fn";

const registerPost = async (req: Request, res: Response) => {
    console.log("req.body", req.body);

    const { name, email, password } = req.body;

    // todos los campos son requeridos
    if (!name || !email || !password) {
        return res.status(400).json(
            errorResponse({ message: "Todos los campos son requeridos" })
        );
    }

    // Generar un hash de la contraseña
    const hashedPassword = encriptarContrasena({ password });

    try {
        // Crear el usuario en la base de datos
        const usuario = await User.create({
            nombreyapellido: name,
            email,
            password: hashedPassword,
            role: "user",
        });

        // Crear una entrada en la bitácora
        await Bitacora.create({
            usuario: req.body.user?.email || "desconocido",
            accion: `Se creó el usuario exitosamente: ${usuario.email}`,
        });

        return res.status(201).json(
            successResponse({ message: "Usuario creado exitosamente" })
        );

    } catch (error) {
        console.error("Error al crear el usuario:", error);
        return res.status(500).json(errorResponse({ message: "Error en el servidor" }));
    }
};

export default registerPost;