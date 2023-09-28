import { google } from 'googleapis';



const authClient = new google.auth.OAuth2(
    process.env.ID_CLIENT,
    process.env.SECRET_CLIENT,
    process.env.REDIRECT_URIS
);

export default authClient;