import express from 'express';
import userRouter from "./users.js"
import mangasRouter from "./mangas.js"
import categoriesRouter from "./categories.js"

let router = express.Router();

router.use("/", userRouter)
router.use("/mangas", mangasRouter)
router.use("/categories", categoriesRouter)


export default router;
