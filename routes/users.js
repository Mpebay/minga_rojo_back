import { Router } from "express";
import register from "../controllers/auth/register.js";
import read from "../controllers/auth/read.js";
import userValidator from "../middlewares/userValidator.js";
import userSchema from "../schema/userSchema.js";

const router = Router();
router.get("/", read);
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/auth/register', userValidator(userSchema), register);

export default router;