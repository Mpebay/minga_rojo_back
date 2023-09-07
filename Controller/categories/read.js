import Category from "../../models/Category.js";

async function read_all(req,res,next){
    try{
        let docs = await Category.find()
        return res.status(200).json(docs)
} catch(err){
    return res.status(500).json({error:err})
}
}
export default read_all