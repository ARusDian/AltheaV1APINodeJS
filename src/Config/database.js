import { Sequelize } from "sequelize";

const sequelize = new Sequelize('altheav1', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default sequelize;