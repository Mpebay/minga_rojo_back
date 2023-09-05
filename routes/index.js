import {Router} from 'express';
import authorsRouter from './authors.js';
import mangasRouter from './mangas.js';
import categoriesRouter from './categories.js';
import ChaptersRouter from './chapters.js';
import userRouter from "./users.js"
let router = Router();

router.use("/auth", userRouter)
router.use("/authors", authorsRouter);
router.use("/mangas", mangasRouter);
router.use("/categories", categoriesRouter);
router.use("/chapters", ChaptersRouter);

export default router;
