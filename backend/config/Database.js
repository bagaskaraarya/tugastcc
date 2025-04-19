import { Sequelize } from "sequelize";

// Nyambungin db ke BE
const db = new Sequelize("etsTCC", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;