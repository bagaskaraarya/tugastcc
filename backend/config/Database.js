import { Sequelize } from "sequelize";

// Nyambungin db ke BE
const db = new Sequelize("tcc1", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;