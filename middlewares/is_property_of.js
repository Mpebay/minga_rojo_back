
import Manga from '../models/Manga.js';

export default async function is_property_of(req, res, next) {
  try {
    let mangaFind = await Manga.findById( req.query.manga_id );
    console.log(req.query)
    
    if (!mangaFind) {
      return res.status(404).json({
        success: false,
        message: "Manga not found with the given ID"
      });
    }

    if (req.author._id.toString() === mangaFind.author_id.toString()) {
      return next();
    }

    return res.json({
