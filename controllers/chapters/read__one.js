// controllers/read_one.js

import Chapter from '../models/Chapter'; // Importa el modelo de Chapter (asume que tienes un modelo Chapter)

export default async (req, res) => {
  try {
    const chapterId = req.params.id;
    const mangaId = req.query.manga_id;

    // Consulta la base de datos para obtener el capítulo por su ID
    const chapter = await Chapter.findById(chapterId);

    if (!chapter) {
      return res.status(404).json({ error: 'Capítulo no encontrado' });
    }

    // Protege los datos que no se van a renderizar en la vista
    const safeChapterData = {
      // Aquí incluye las propiedades que deseas mostrar en la vista
      // y cualquier propiedad que debas ocultar o proteger.
    };

    // Configura las propiedades estándar
    const response = {
      ...safeChapterData,
      // Agrega las páginas del capítulo a la respuesta
      pages: chapter.pages,
    };

    // Configura la propiedad "next" con el ID del capítulo siguiente
    const nextChapter = await Chapter.findOne({
      mangaId,
      order: { $gt: chapter.order },
    });

    if (nextChapter) {
      response.next = nextChapter._id; // Suponiendo que _id es el campo de ID del capítulo
    } else {
      response.next = null; // Si no hay un capítulo siguiente
    }

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
