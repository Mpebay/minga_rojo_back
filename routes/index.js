import authorsRouter from './authors.js';
import mangasRouter from './mangas.js';
import categoriesRouter from './categories.js';
import chaptersRouter from "./chapters.js"
import userRouter from "./users.js"
import express from 'express';


let router = express.Router();

router.use("/auth", userRouter)
router.use("/authors", authorsRouter)
router.use("/mangas", mangasRouter)
router.use("/categories", categoriesRouter)
router.use("/chapters", chaptersRouter)
router.use("/manga", mangasRouter)




export default router;
