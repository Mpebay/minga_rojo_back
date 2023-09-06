import { connect } from "mongoose";

connect(process.env.LINK_DB)
  .then(() => console.log("Database conectada"))
  .catch((err) => console.log(err));
