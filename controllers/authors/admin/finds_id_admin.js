import Author from "../../../models/Author.js";

async function finds_id(req, res, next) {
    const id  = req.params.id;
    try {
        const author = await Author.findOne({ user_id: id });
        console.log(author)
        if (author) {
            req.author = author
            next();
        } else {
            return res.status(400).json({
                success: false,
                message: 'Author not found',
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'Server Error',
        });
    }
}
export default finds_id;