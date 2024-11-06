// src/backend/config/database.ts
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
    process.env.MYSQL_DATABASE!,
    process.env.MYSQL_USER!,
    process.env.MYSQL_PASSWORD!,
    {
        host: process.env.MYSQL_HOST!,
        dialect: 'mysql',
        logging: false,
    }
);
export default sequelize;
