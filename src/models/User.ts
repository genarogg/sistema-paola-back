import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "@db";

class User extends Model {
    declare id: number;
    declare nombreyapellido: string;
    declare email: string;
    declare password: string;
    declare role: string;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nombreyapellido: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: "users",
        sequelize: sequelize,
    }
);

export default User;