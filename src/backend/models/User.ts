import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

interface UserAttributes {
    user_id: string;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    password_hash: string;
    created_at?: Date;
}

type UserCreationAttributes = Optional<UserAttributes, 'user_id'>;

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public user_id!: string;
    public username!: string;
    public first_name!: string;
    public last_name!: string;
    public email!: string;
    public password_hash!: string;
    public readonly created_at!: Date;
}

User.init(
    {
        user_id: {
            type: DataTypes.STRING,
            autoIncrement: false,
            allowNull: false,
            primaryKey: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password_hash: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        modelName: 'User',
        tableName: 'users',
        timestamps: false,
    }
);

export default User;
