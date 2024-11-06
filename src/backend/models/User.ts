import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

interface UserAttributes {
    user_id: string;
    created_at?: Date;
}

type UserCreationAttributes = Optional<UserAttributes, 'user_id'>;

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public user_id!: string;
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
