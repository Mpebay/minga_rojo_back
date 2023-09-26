/*import chapters from "../../models/Chapter.js";

const getMeMangas = async (req, res, next) => {
    try {
        const manga = await chapters.findById(req.params.manga_id);

        if (!manga) {
            return res.status(404).json({ message: "Manga not found" });
        }
        res.status(200).json({ manga });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export default getMeMangas;*/
