import express from "express";
import { getUsers, getUserById, createUser, userUpdate, userDelete } from "../controllers/UserController.js";

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/add-users", createUser);
router.put("/update-users/:id", userUpdate);
router.delete("/delete-users/:id", userDelete);

export default router;