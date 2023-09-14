import Category from "../../models/Category.js";

const findCategoryId = async (req, res, next) => {
  try {
    console.log(req.body);
    const category = await Category.findOne({
      name: req.body.category_id,
    });
    if (category) {
      req.body.category_id = category._id;
      return next();
    }
    return res.status(404).json({
      success: false,
      response: null,
      message: "category not found",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      response: null,
      message: "server error",
    });
  }
};

export default findCategoryId;
