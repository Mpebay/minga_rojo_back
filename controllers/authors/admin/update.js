import Author from "../../../models/Author.js";
import User from "../../../models/User.js";

const update = async(req , res, next)=>{
    console.log(req.author._id);
         try {
          let upd_auth = await Author.findOneAndUpdate({_id : req.author._id},req.body.author,{new:true} )  
          let upd =  await User.findOneAndUpdate({_id : req.author.user_id}, req.body.user,{new:true})
          if(upd && upd_auth){
            return res.json({ response : upd,upd_auth,
                                menssage: "updated"})
          } else { 
            return res.status(404).json({ message: "not found"})
          }
        } catch (error) {
            return res.status(500).json({ message: "server error " ,error})
        }
    }

export default update