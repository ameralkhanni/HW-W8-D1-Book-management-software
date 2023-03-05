import express  from "express";
import { createUser, getAllUsers } from "../controller/user.controller";
let router=express.Router();

// users
router.post('/', createUser)
router.get('/',getAllUsers )
export default router;