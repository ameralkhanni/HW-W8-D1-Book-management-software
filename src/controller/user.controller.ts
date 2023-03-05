import {prisma} from "../config/db";

import {Request,Response} from "express";


// Add new User
export const createUser=async(req: Request, res: Response)=>{
    try {
        const user=req.body;
await prisma.user.create({

    data: user,
})
res.json({
    message:"user created successfully"
})
    } catch (error) {
        console.log(error);
        
        
    }
};
// get All users
export const getAllUsers = async(req: Request, res: Response)=>{
    const users = await prisma.user.findMany();
    res.json(users);

}