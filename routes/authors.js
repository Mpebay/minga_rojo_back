import express from "express";
import { getAllAuthors, getAuthors } from "../controllers/authors/read_me.js";
import admin from "../controllers/authors/admin/admin.js";
import passport from "../milddleware/passport.js";
import update from "../controllers/authors/admin/update.js";
import finds_id from "../controllers/authors/admin/finds_id.js"

let router = express.Router();

router.get("/", getAllAuthors);
router.get("/me/:id", getAuthors);
router.put("/role/author/:id",passport.authenticate("jwt", {session:false}),finds_id,update)
router.get(
  "/admin",
   passport.authenticate("jwt", { session: false }),
  admin
);

export default router;
