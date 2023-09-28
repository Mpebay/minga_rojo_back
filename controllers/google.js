import authClient from "../config/authGoogle.js";

const scopes = [process.env.SCOPES];

function getAuthUrl(req, res) {
    const url = authClient.generateAuthUrl({
        access_type: "offline",
        scope: scopes,
    });
    res.status(200).json({ url: url });
}
export default getAuthUrl;