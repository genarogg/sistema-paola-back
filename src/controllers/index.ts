// archivo para importar todos los controladores
import loginPost from "./auth/login";
import registerPost from "./auth/register";
import obtenerUsuario from "./auth/obtenerUsuario";

import createDepartamento from "./departamento/create";
import getDepartamentos from "./departamento/reader";
import deleteDepartamento from "./departamento/delete";
import updateDepartamento from "./departamento/update";

import createBienes from "./bienes/create";
import getBieness from "./bienes/reader";
import deleteBienes from "./bienes/delete";
import updateBienes from "./bienes/update";



export {
    loginPost,
    registerPost,
    obtenerUsuario,

    createDepartamento,
    getDepartamentos,
    deleteDepartamento,
    updateDepartamento,

    createBienes,
    getBieness,
    deleteBienes,
    updateBienes
}