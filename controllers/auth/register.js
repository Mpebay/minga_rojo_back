import User from '../../models/User.js';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

// Configuracion de nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS
  },
});

async function create(req, res, next) {
  
  // Extrae los datos de req.body
  let {
    email,
    password,
    photo,
    role
  } = req.body


  try {
    // Crea el usuario en la base de datos
    const newUser = await User.create({
      email,
      password,
      photo,
      role,
      verify_code: crypto.randomBytes(10).toString('hex')
    })

    // Construye la URL de verificación de correo
    const verificationLink = `http://localhost:5173/auth/verify?code=${newUser.verify_code}`;

    // Envía el correo de verificación
    try {
      await transporter.sendMail({
        from: '"Verificación de correo" <santiagominga7@gmail.com>',
        to: newUser.email,
        subject: "Verifica tu correo electrónico",
        html: `<p>Por favor, haz clic en el siguiente enlace para verificar tu correo electrónico:</p>
             <a href="${verificationLink}">${verificationLink}</a>`,
      });
    } catch (error) {
      console.error("Error al enviar el correo de verificación:", error);
    }

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
