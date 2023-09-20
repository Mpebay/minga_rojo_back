/*import Manga from '../../models/Manga.js'; // Asumiendo que tengas un modelo llamado "Manga"

const finds_id = async (req, res, next) => {
    try {
        const { manga_id } = req.query;

        // Buscar el manga por su ID en la base de datos
        const manga = await Manga.findById(manga_id);

        // Verificar si el manga no existe
        if (!manga) {
            return res.status(404).json({ message: 'Manga no encontrado.' });
        }

        // Adjuntar el manga al objeto "req" para que esté disponible en el controlador
        req.manga = manga;

        // Continuar con la siguiente función (generalmente el controlador)
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};

export default finds_id;*/
