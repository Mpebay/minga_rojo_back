import express from "express";
import userRouter from "./users.js";
import authorsRouter from "./authors.js";
import mangasRouter from "./mangas.js";
let router = express.Router();

router.use("/", userRouter);
router.use("/authors", authorsRouter);
router.use("/mangas", mangasRouter);

export default router;
