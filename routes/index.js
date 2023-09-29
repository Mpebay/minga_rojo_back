import authorsRouter from './authors.js';
import mangasRouter from './mangas.js';
import categoriesRouter from './categories.js';
import chaptersRouter from "./chapters.js"
import userRouter from "./users.js"
import express from 'express';
import commentsRouter from './comments.js';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from 'swagger-jsdoc';

let router = express.Router();

router.use("/auth", userRouter)
router.use("/authors", authorsRouter)
router.use("/mangas", mangasRouter)
router.use("/categories", categoriesRouter)
router.use("/chapters", chaptersRouter)
router.use("/manga", mangasRouter)
router.use("/comments", commentsRouter)
router.use("/api-docs", swaggerUi.serve);
router.get("/api-docs", swaggerUi.setup(swaggerSpec));



export default router;
