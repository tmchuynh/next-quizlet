import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

const User = sequelize.define(
    'User',
    {
        user_id: {
            type: DataTypes.STRING( 250 ),
            primaryKey: true,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        tableName: 'users',
        timestamps: false,
    }
);

export default User;
