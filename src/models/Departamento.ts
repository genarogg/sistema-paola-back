import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "@db";

class Departamento extends Model {
    declare id: number;
    declare clasificacion: string;
    declare departamento: string;
    declare dependencia: string;
    declare cantidad: number;
    declare costo_total: number;
}

Departamento.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        clasificacion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        departamento: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dependencia: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        costo_total: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0,
        },
    },
    {
        tableName: "departamentos",
        sequelize: sequelize,
        freezeTableName: true,
    }
);

export default Departamento;