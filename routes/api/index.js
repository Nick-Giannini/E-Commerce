const router = require('express').Router();

const tagsRoutes = require('./tag-routes');
const productsRoutes = require('./product-routes');
const categoriesRoutes = require('./category-routes');


router.use('/tags', tagsRoutes);
router.use('/products', productsRoutes);
router.use('/categories', categoriesRoutes);


module.exports = router;