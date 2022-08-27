const { Book, Category } = require("../../db/models");
const { Op } = require("sequelize");

module.exports = {
  getAllBooks: async(req, res, next) => {
    try {
      //define endpoin be filter query params
      const {keyword = ""} = req.query; //filtering with keyword or without keyword

      let condition = {
        user: req.user.id,
      };
      
      if(keyword !== "") {
        condition = {...condition, title: { [Op.like] : `%${keyword}%`} };
      };
      
      // menyimpan token user login
      const books = await Book.findAll({
        where: condition,
        // calling category data, for visible when hit get book
        include: {
          model: Category,
          attributes: ['id', 'name'] //custom respon base on needed
        }
      });

      res.status(200).json({
        message: "Success get all books",
        data: books,
      });
    } catch (err) {
      next(err);
    };
  },
}