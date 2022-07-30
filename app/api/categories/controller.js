const {Category} = require('../../db/models');

module.exports = {
  getAllCategories: async(req, res, next)=> {
    try {
      //menyimpan token user login
      // console.log(req.user); 
      const categories = await Category.findAll({
        where: {user: req.user.id},
        attributes: ['id', 'name']
      });

      res.status(200).json({
        message: 'Success get all categories',
        data: categories
      });
    } catch (err) {
      next(err);
    }
  },
  createCategories: async(req, res, next)=> {
    try {
      const {name} = req.body;

      const categories = await Category.create({
        name,
        user: req.user.id,
      });
      res.status(201).json({
        message: 'Succes create category',
        data: categories,
      })
    } catch (err) {
      next(err);
    }
  }
}