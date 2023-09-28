import express from "express";
import dialogflow from "dialogflow"
import { struct } from 'pb-util';
import keys from '../config/keys.js';
import getAuthUrl from "../controllers/google.js";
import redirect from "../controllers/redirect.js";

const router = express.Router();


const sessionClient = new dialogflow.SessionsClient({
    credentials: {
        //client_id: keys.client_id,
        //project_id: keys.project_id,
        //auth_uri: keys.auth_uri,
        //token_uri: keys.token_uri,
        //auth_provider_x509_cert_url: keys.auth_provider_x509_cert_url,
        private_key: keys.secret_client,
        //redirect_uris: keys.redirect_uris,
        //javascript_origins: keys.javascript_origins,
        client_email: keys.client_email,
    }
});

const sessionPath = sessionClient.sessionPath("mingabot-wauv", keys.api_key);

router.post('/send_message',
    async (req, res) => {
        const { message } = req.body;
        const request = {
            session: sessionPath,
            queryInput: {
                text: {
                    text: message,
                    languageCode: "es",
                },
            },
        };

        try {
            const responses = await sessionClient.detectIntent(request);
            const result = responses[0].queryResult;
            res.json({ message: result.fulfillmentText, intent: struct.decode(result.intent) });
        } catch (error) {
            res.status(500).send(error);
            console.log(error);
        }
    });
router.get("/", getAuthUrl)
router.get("/redirect", redirect)



export default router;