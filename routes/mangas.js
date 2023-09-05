import express from 'express';
import getMangas  from '../cotrollers/mangas/mangaControllers.js';
import readManga from '../cotrollers/mangas/read_one.js';
let router = express.Router();

router.get('/', getMangas)
router.get("/:id", readManga)



export default router;
