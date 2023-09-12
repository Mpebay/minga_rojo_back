import User from '../../models/User.js'

const create = async (req, res, next) => {

    try {
        const newUser = new User(req.body)
        await newUser.save()
        return res.status(200).json({
            success: true,
            response: newUser,
            message: "User created successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            response: null,
            message: error.message
        })
    }}
    export default create