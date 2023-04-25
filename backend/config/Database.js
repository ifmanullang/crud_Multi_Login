import { Sequelize } from "sequelize";

const db = new Sequelize('multiLogin_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;