import { Router } from "express";
import register from "../controllers/auth/register.js";
import read from "../controllers/auth/read.js";
import signin from "../controllers/auth/signin.js";
import accountNotExists from "../milddleware/accountNotExists.js";
import passwordIsOk from "../milddleware/passwordIsOk.js";
import generateToken from "../milddleware/generateToken.js";
import userValidator from "../validators/userValidator.js";
import validator from "../milddleware/validator.js";
import passport from "../milddleware/passport.js";
import signout from "../controllers/auth/signout.js";
import userSchema from "../schema/userSchema.js";
import hasheador from "../middlewares/hasheador.js";
import findEmail from "../middlewares/findEmail.js";
import signinToken from "../controllers/auth/signinToken.js";


const router = Router();
router.get("/", read);
router.post("/signin",validator(userValidator), accountNotExists, passwordIsOk, generateToken, signin )
router.post("/signout", passport.authenticate("jwt", {session:false}), signout)
router.post('/register', findEmail, validator(userSchema), hasheador, register);
router.post("/signinToken",passport.authenticate("jwt", {session:false}),signinToken)


export default router;

