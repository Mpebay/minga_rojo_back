import getNewMangasAuthor from "../controllers/mangas/read_news.js";
import express from "express";
import readManga from "../controllers/mangas/read_one.js";
import read from "../controllers/mangas/read.js";

const router = express.Router();
router.get("/new/:id", getNewMangasAuthor);
router.get("/", read);
router.get("/:id", readManga);

export default router;
