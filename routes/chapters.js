import express from "express";
import get_one from "../controllers/chapters/get_one.js";
import getChapters from "../controllers/chapters/chapterControllers.js";
import validator from "../middlewares/validator.js";
import chapterValidator from "../validators/chapterValidator.js";
import addCoverPhoto from "../middlewares/add_cover_photo.js";
import create from "../controllers/chapters/create.js";
//import getMeMangas from "../controllers/chapters/get_me.js";
//import finds_id from "../middlewares/finds_id.js";
//import passport from "../middlewares/passport.js";


const router = express.Router();

router.get("/:id", get_one);
router.get("/", getChapters);
router.post ("/", /*passport.authenticate("jwt", {session:false})*/ /*isPropertyOf*/ addCoverPhoto, validator(chapterValidator), create)
//router.get("/me",passport.authenticate("jwt", {session:false}), finds_id, getMeMangas)

export default router;
