const express = require('express');
const router = express.Router();
const {auth} = require('../../middlewares/auth');
const controller = require('./controller');
/* cara berbeda untuk import module
// const {getAllCategories} = require('../categories');

// router.get('/categories', auth, getAllCategories);
*/

router.get('/categories', auth, controller.getAllCategories);

module.exports = router;
