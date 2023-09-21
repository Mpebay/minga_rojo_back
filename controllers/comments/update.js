import Comment from "../../models/Comment.js";

const controllerComments =
  async (req, res, next) => {

    try {
      let updateComments = await Comment.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      )
      if (updateComments) {
        return res.status(200).json({ response: updateComments })
      } else {
        return res.status(404).json({ response: "not found" })
      }
    } catch (error) { next(error) }
  }


export default controllerComments
