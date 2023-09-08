import readAll from "../controllers/mangas/readAll.js";
import express from 'express';
import readManga from '../cotrollers/mangas/read_one.js';
import read from '../controller/mangas/read.js';

const router = express.Router();

router.get("/", read);
router.get("/:id", readManga)

export default router;


