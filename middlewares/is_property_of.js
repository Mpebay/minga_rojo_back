const isPropertyOf = (req, res, next) => {
    const mangaId = req.params.mangaId;
    const manga = Manga.findById(mangaId);
    if (manga.author_id === req.author._id) {
        next();
    } else {
        res.status(401).json({
            success: false,
            response: null,
            message: 'You are not authorized to perform this action'
        })
    }
   
}