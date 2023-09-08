import { Router } from "express";
import express from "express";
import read from "../controllers/categories/read.js";
import indexRouter from './routes/index.js';
import read_all from "../Controller/categories/read.js";
const router = Router();

router.get("/", read);
router.get("/", read_all);

export default router;