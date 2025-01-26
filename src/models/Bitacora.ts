import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "@db";
import moment from "moment-timezone";

class Bitacora extends Model {
    declare id: number;
    declare usuario: string;
    declare accion: string;
    declare nivel_severidad: string;
    declare ip: string;
    declare hora: string;
    declare fecha: string;
}

Bitacora.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        usuario: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        accion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fecha: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: moment().tz("America/Caracas").format("YYYY-MM-DD"),
        },
        hora: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: moment().tz("America/Caracas").format("hh:mm A"),
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
    },
    {
        tableName: "bitacora",
        sequelize: sequelize,
        freezeTableName: true
    }
);

export default Bitacora;