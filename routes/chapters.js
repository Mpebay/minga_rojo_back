import express from 'express';
import read from '../controllers/chapters/read.js';
import get_one from '../controllers/chapters/get_one.js';
import getChapters  from '../cotrollers/chapters/chapterControllers.js';
const router = express.Router();

router.get('/:id' , get_one );
router.get('/', getChapters)

export default router;
