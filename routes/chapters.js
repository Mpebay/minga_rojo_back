import express from "express";
import get_one from "../controllers/chapters/get_one.js";
import getChapters from "../controllers/chapters/chapterControllers.js";
import validator from "../middlewares/validator.js";
import chapterValidator from "../validators/chapterValidator.js";
import addCoverPhoto from "../middlewares/add_cover_photo.js";
import create from "../controllers/chapters/create.js";
import get_me from "../controllers/chapters/get_me.js";
import find_id from "../middlewares/finds_id.js";
import passport from "../middlewares/passport.js";
import isPropertyOf from "../middlewares/is_property_of.js"
import is_active from "../middlewares/is_active.js"
import update from "../controllers/chapters/update.js";
import validateChapter from "../validators/validateChapter.js";
import destroy from "../controllers/chapters/destroy.js"

const router = express.Router();


router.get("/", getChapters);
router.get('/me', passport.authenticate('jwt', { session: false }), find_id, isPropertyOf, get_me);
router.get("/:id", get_one);
router.post ("/", addCoverPhoto, validator(chapterValidator), create)
router.put("/:id",passport.authenticate('jwt', { session: false }), find_id, is_active, isPropertyOf, validator(validateChapter), update)
router.delete('/:id', passport.authenticate('jwt', { session: false }), find_id,is_active ,isPropertyOf, destroy);
export default router;
