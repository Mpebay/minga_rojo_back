import express from "express";
import { getAllAuthors, getAuthors } from "../controllers/author/read_me.js";
let router = express.Router();

router.get("/", getAllAuthors);
router.get("/me/:id", getAuthors);

export default router;

