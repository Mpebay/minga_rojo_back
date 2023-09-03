import express from 'express';
import userRouter from "./users.js"
let router = express.Router();

router.use("/", userRouter)

export default router;
