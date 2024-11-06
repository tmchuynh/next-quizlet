import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';
import { User } from '../../app/types/index';

type UserCreationAttributes = Optional<User, 'user_id' | 'created_at'>;

class User_ extends Model<User, UserCreationAttributes> implements User {
    public user_id!: string;
    public readonly created_at!: Date;
}

User_.init(
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

export default User_;
