import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';
interface UserAttributes {
    user_id: string;
    created_at: Date;
}

// Define which attributes are optional when creating a User instance
type UserCreationAttributes = Optional<UserAttributes, 'created_at'>;

// Define the User model class, extending the Sequelize Model
class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    user_id!: string;
    created_at!: Date;
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
