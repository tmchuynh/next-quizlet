import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

class User extends Model {

}

User.init(
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
        sequelize,
        modelName: 'User',
        tableName: 'users',
        timestamps: false,
    }
);

export default User;
