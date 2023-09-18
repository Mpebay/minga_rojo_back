import { Router } from "express";
import read from "../controllers/auth/read.js";
import signin from "../controllers/auth/signin.js";
import accountNotExists from "../milddleware/accountNotExists.js";
import passwordIsOk from "../milddleware/passwordIsOk.js";
import generateToken from "../milddleware/generateToken.js";
import userValidator from "../validators/userValidator.js";
import validator from "../milddleware/validator.js";
import passport from "../milddleware/passport.js";
import signout from "../controllers/auth/signout.js";


const router = Router();
router.get("/", read);
router.post("/signin",validator(userValidator), accountNotExists, passwordIsOk, generateToken, signin )
router.post("/signout", passport.authenticate("jwt", {session:false}), signout)
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

export default router;