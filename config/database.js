import {connect} from "mongoose"

connect(process.env.uri_link)
.then(()=>console.log("Database conectada"))
.catch(err => console.log(err))