import authClient from "../config/authGoogle.js";
async function redirect(req, res) {
    const code = req.query.code;
    const { tokens } = await authClient.getToken(code);
    authClient.setCredentials(tokens);
    res.status(200).json(tokens);
}
export default redirect;