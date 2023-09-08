
import express from "express";
import read from "../controllers/categories/read.js";
import read_all from "../Controller/categories/read.js";
const router = express.Router();

router.get("/", read);

export default router;