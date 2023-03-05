import {prisma} from "../config/db";

import {Request,Response} from "express";
// Add new loan
export const createLoan=async(req: Request, res: Response)=>{
    try {
        const loan=req.body;
await prisma.loan.create({

    data: loan,
})
res.json({
    message:"loan created successfully"
})
    } catch (error) {
        console.log(error);
        
        
    }
};
// get All Loans
export const getAllLoans = async(req: Request, res: Response)=>{
    const loans = await prisma.loan.findMany();
    res.json(loans);

};


export const  getLendBookUser = async (req: Request, res: Response) => {
    try {
      const loan = await prisma.loan.findMany({
        select:{
          book:true,
          user:true,
        }
      });
      if (loan) {
        res.json(loan);
      } else {
        res.json("loan not available");
      }
    } catch (error) {
      res.json(error);
    }
  };

  export const getLendedBook= async (req: Request, res: Response) => {
    try {
      const books = await prisma.loan.findMany({
        select:{
          book:true,
        }
      });
      if (books) {
        res.json(books);
      } else {
        res.json("Books not available");
      }
    } catch (error) {
      res.json(error);
    }
  };