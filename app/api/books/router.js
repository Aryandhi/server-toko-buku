const express = require('express');
const router = express.Router();
const {auth} = require('../../middlewares/auth');
const controller = require('./controller');
/* cara berbeda untuk import module
// const {getAllCategories} = require('../categories');

// router.get('/categories', auth, getAllCategories);
*/

router.get('/books', auth, controller.getAllBooks);
// router.post('/categories', auth, controller.createCategories);
// router.put('/categories/:id', auth, controller.updateCategories);
// router.delete('/categories/:id', auth, controller.deleteCategories);

module.exports = router;
