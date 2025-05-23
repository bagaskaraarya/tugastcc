import { Sequelize } from "sequelize";
import db from "../config/Database.js";

// Membuat tabel "user"
const User = db.define(
  "user", // Nama Tabel
  {
    name: Sequelize.STRING,
    story: Sequelize.STRING,
  }, {
    freezeTableName: true,
  }
);

db.sync().then(() => console.log("Database synced"));

export default User;