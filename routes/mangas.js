import express from 'express';
import read from '../controller/mangas/read.js';

const router = express.Router();

router.get("/", read)
export default router;