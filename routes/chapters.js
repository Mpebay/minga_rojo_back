// routes/chapters.js
import express from 'express';
import read from '../controllers/chapters/read.js';
import get_one from '../controllers/chapters/get_one.js';
const router = express.Router();

// Ruta para obtener un capítulo por ID
router.get('/' , read );
router.get('/:id' , get_one );

export default router;
