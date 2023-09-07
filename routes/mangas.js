import express from 'express';
import readManga from '../cotrollers/mangas/read_one.js';
import read from '../controller/mangas/read.js';

let router = express.Router();

router.get("/:id", readManga)
router.get("/", read)


export default router;

