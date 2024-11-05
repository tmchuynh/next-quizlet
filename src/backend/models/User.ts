// models/User.ts

import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class User extends Model { }

User.init( {
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING( 50 ),
        unique: true,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING( 100 ),
        unique: true,
        allowNull: false,
    },
    password_hash: {
        type: DataTypes.STRING( 255 ),
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    sequelize,
    modelName: 'User',
    timestamps: false,
} );

export default User;
