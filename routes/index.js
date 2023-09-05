import express from 'express';
import mangasRouter from "./mangas.js"
import chaptersRouter from "./chapters.js"

let router = express.Router();


router.use("/chapters", chaptersRouter)
router.use("/mangas", mangasRouter)



export default router;
