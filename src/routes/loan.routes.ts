import express  from "express";
import { createLoan, getAllLoans, getLendBookUser, getLendedBook } from "../controller/loan.controller";
let router=express.Router();
// loan
router.post('/', createLoan)
router.get('/',getAllLoans )
router.get('/loanBook',getLendBookUser )
router.get('/LendedBook',getLendedBook )

export default router;