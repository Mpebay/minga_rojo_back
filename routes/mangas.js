import getNewMangasAuthor from "../controllers/mangas/read_news.js";
import express from "express";
import createOne from "../controllers/mangas/createOne.js";
import findCategoryId from "../middlewares/mangas/findCategoryId.js";
import mangaValidator from "../middlewares/mangas/mangaValidatorMiddle.js";
import schema from "../validators/mangaValidator.js";
import passport from "../milddleware/passport.js";
import readAll from "../controllers/mangas/readAll.js";
import readManga from "../controllers/mangas/read_one.js";
import read from "../controllers/mangas/read.js";
import getMyMangas from "../controllers/mangas/get_me.js";
import finds_id from "../middlewares/finds_id.js";
import is_active from "../middlewares/is_active.js";
import isPropertyManga from "../middlewares/isPropertyManga.js";
import updateManga from "../controllers/mangas/update.js";
import destroyManga from "../controllers/mangas/destroy.js";
import updateMangaSchema from "../schema/updateMangaSchema.js";
import validator from "../milddleware/validator.js";

const router = express.Router();
router.get("/me", passport.authenticate("jwt", { session: false }), finds_id, getMyMangas);
router.get("/new/:id", getNewMangasAuthor);
router.get("/allMangas", readAll);
router.get("/", read);
router.get("/:id", readManga);
router.put("/:id", passport.authenticate("jwt", { session: false }), finds_id, is_active, isPropertyManga, validator(updateMangaSchema), updateManga);
router.delete("/:id", passport.authenticate("jwt", { session: false }), finds_id, is_active, isPropertyManga, destroyManga);
router.post(
  "/",
  //passport.authenticate("jwt", { session: false }),  para que funcionara tuve que sacar el passport ya que no tenia forma de auteticar con token
  findCategoryId,
  mangaValidator(schema),
  createOne
);

export default router;
