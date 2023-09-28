import {getDownloadURL, ref,uploadBytes} from "firebase/storage"
import { uuidv4 } from "@firebase/util";
import firestorage from "../imgTransform/firebase.js";


export async function imageUrl(req,res,next){
    
    try {
        const imgs = req.body.pages
        const imgUrls = []

        for (const img of imgs) {

        const uniqueFileName = uuidv4();
        const storagePath = `/mangas/chapters/${uniqueFileName}`;
        const storageRef = ref(firestorage, storagePath )
        await uploadBytes(storageRef,img)
        const imgUrl = await getDownloadURL(storageRef)
        imgUrls.push(imgUrl);

        }
        req.body.pages = imgUrls;
        
        next()
    } catch (error) {
        console.log(error);
    }
 }