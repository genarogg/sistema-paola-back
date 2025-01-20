import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "@db";

class User extends Model {
    public id!: number;
    public email!: string;
    public password!: string;
    public role!: "admin" | "user";
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
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
        tableName: "auth_users",
        sequelize: sequelize,
    }
);

export default User;