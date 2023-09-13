import getNewMangasAuthor from "../controllers/mangas/read_news.js";
import express from "express";
import readManga from "../cotrollers/mangas/read_one.js";
import read from "../controller/mangas/read.js";
import createOne from "../controllers/mangas/createOne.js";
import findCategoryId from "../middlewares/mangas/findCategoryId.js";
import mangaValidator from "../middlewares/mangas/mangaValidatorMiddle.js";
import schema from "../validators/mangaValidator.js";
import passport from "../middlewares/passport.js";

const router = express.Router();
router.get("/new/:id", getNewMangasAuthor);
router.get("/", read);
router.get("/:id", readManga);
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  findCategoryId,
  mangaValidator(schema),
  createOne
);

export default router;
