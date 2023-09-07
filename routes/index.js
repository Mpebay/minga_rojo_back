import express from 'express';
import mangasRouter from "./mangas.js"
import chaptersRouter from "./chapters.js"

let router = express.Router();

router.use("/chapters", chaptersRouter)
router.use("/manga", mangasRouter)

import userRouter from "./users.js"
import categoriesRouter from "./categories.js"

router.use("/", userRouter)
router.use("/mangas", mangasRouter)
router.use("/categories", categoriesRouter)


export default router;
