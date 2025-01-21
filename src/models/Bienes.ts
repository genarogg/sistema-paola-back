import {  DataTypes, Model } from "sequelize";
import sequelize from "@db";

class Bienes extends Model {
    declare id: number;
    declare grupo: number;
    declare subgrupo: number;
    declare seccion: number;
    declare concepto_movimiento: string;
    declare cantidad: number;
    declare numero_identificacion: string;
    declare nombre: string;
    declare marca: string;
    declare modelo: string;
    declare serial: string;
    declare incorporaciones: number | null;
    declare desincorporaciones: number | null;
    declare observaciones?: string;
    declare departamento: string;
}

Bienes.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        grupo: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        subgrupo: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        seccion: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        concepto_movimiento: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        numero_identificacion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        marca: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        modelo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        serial: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        incorporaciones: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        desincorporaciones: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        observaciones: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        departamento: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: "bienes",
        sequelize: sequelize,
        freezeTableName: true,
    }
);

export default Bienes;