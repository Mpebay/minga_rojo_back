import { Router } from "express";
import register from "../controllers/auth/register.js";
import read from "../controllers/auth/read.js";
import userValidator from "../middlewares/userValidator.js";
import userSchema from "../schema/userSchema.js";
import hasheador from "../middlewares/hasheador.js";
import findEmail from "../middlewares/findEmail.js";

const router = Router();
router.get("/", read);
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.post('/register', findEmail, userValidator(userSchema), hasheador, register);


export default router;

