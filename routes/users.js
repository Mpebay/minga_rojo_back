import { Router } from "express";
import read from "../controllers/auth/read.js";

const router = Router();
router.get("/", read);
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

export default router;