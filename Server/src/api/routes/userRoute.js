import express from "express";
import { deleteUser, getUserByFilter, getUserById, userLogin, userRegister, userUpdateProfile } from "../controllers/userController.js";

const router = express.Router();

router.post("/users/userRegister",userRegister);

router.post("/users/userLogin",userLogin);

router.put("/users/userUpdateProfile",userUpdateProfile);

router.get("/users/getUserById",getUserById);

router.delete("/users/deleteUser",deleteUser);

router.get("/users/getUserByFilter",getUserByFilter);


export default router;