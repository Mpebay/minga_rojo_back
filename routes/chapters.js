import express from "express";
import get_one from "../controllers/chapters/get_one.js";
import getChapters from "../controllers/chapters/chapterControllers.js";
import validator from "../middlewares/validator.js";
import chapterValidator from "../validators/chapterValidator.js";
import addCoverPhoto from "../middlewares/add_cover_photo.js";
import create from "../controllers/chapters/create.js";
import passport from "../middlewares/passport.js";
import isPropertyOf from "../middlewares/is_property_of.js";

const router = express.Router();

router.get("/:id", get_one);
router.get("/", getChapters);
router.post ("/", passport.authenticate("jwt", {session:false}), isPropertyOf, addCoverPhoto, validator(chapterValidator), create)

export default router;
