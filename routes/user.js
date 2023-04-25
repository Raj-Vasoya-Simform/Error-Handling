import express from "express";
import { allUsers, newUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/user", newUser);

router.get("/users", allUsers);

export default router;
