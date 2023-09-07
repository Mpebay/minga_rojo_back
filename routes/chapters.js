import express from 'express';
import getChapters  from '../cotrollers/chapters/chapterControllers.js';
let router = express.Router();

router.get('/', getChapters)


export default router;
