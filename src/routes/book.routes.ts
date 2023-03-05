import express  from "express";
import { createBook, getAllBooks } from "../controller/book.controller";
let router=express.Router();

// book
router.post('/', createBook)
router.get('/',getAllBooks )






export default router;