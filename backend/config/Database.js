import { Sequelize } from "sequelize";

// Nyambungin db ke BE
const db = new Sequelize("tcc1", "root", "", {
  host: "35.223.250.30",
  dialect: "mysql",
});

export default db;