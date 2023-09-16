import User from '../../models/User.js';
import bcrypt from 'bcrypt';

async function create(req, res, next) {
  let {
    email,
    password,
    photo,
    role
  } = req.body


  try {
    const newUser = await User.create({
      email,
      password,
      photo,
      role
    })
    res.json({
      response: newUser,
      message: 'User created successfully'
    });
  } catch (error) {
    console.log(error)
  }
}



export default create;
/*     import User from '../../models/User.js';
import bcrypt from 'bcrypt';
import userValidator from '../../middlewares/userValidator.js';

const create = async (req, res, next) => {
  try {
    console.log('Entrando en la función create')
    userValidator(req, res, async () => {
        console.log('Entrando en el callback de userValidator')
        const { email, password, photo } = req.body;

        const hashedPassword = bcrypt.hashSync(password, 10)

        const newUser = new User({
          email,
          password: hashedPassword,
          photo,
        });

        await newUser.save();

        return res.status(200).json({
          success: true,
          response: newUser,
          message: 'User created successfully',
        });
      });
  } catch (error) {
    return res.status(500).json({
      success: false,
      response: null,
      message: error.message,
    });
  }
};

export default create; */

/* import User from '../../models/User.js'


const create = async (req, res, next) => {



    try {
        let newUser = new User(req.body)
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
    export default create */
