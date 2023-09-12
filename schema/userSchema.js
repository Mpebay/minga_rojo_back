import Joi from "joi";
//import joiOid from "joi-oid";

const userSchema = Joi.object({
    email: Joi.string().required().messages({
    }),
    password: Joi.string().min(8).max(16).required().messages({
    }),
    photo: Joi.string().uri().required().messages({
        }),
})

export default userSchema;
