import getNewMangasAuthor from "../controllers/mangas/read_news.js";
import express from "express";
import readManga from "../cotrollers/mangas/read_one.js";
import read from "../controller/mangas/read.js";
import createOne from "../controllers/mangas/createOne.js";
import findCategoryId from "../middlewares/mangas/findCategoryId.js";
import mangaValidator from "../middlewares/mangas/mangaValidatorMiddle.js";
import schema from "../validators/mangaValidator.js";
import passport from "../middlewares/passport.js";
import readAll from "../controllers/mangas/readAll.js";

const router = express.Router();
router.get("/new/:id", getNewMangasAuthor);
router.get("/allMangas", readAll);
router.get("/", read);
router.get("/:id", readManga);
router.post(
  "/",
  //passport.authenticate("jwt", { session: false }), para que funcionara tuve que sacar el passport ya que no tenia forma de auteticar con token
  findCategoryId,
  mangaValidator(schema),
  createOne
);

export default router;
