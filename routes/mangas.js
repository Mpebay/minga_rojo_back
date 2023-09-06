import express from "express";
import getNewMangasAuthor from "../controllers/mangas/read_news.js";

let router = express.Router();

router.get("/new/:id", getNewMangasAuthor);

export default router;
