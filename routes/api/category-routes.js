const router = require('express').Router();
const { Product, Category} = require('../../models');

//get all
router.get('/', async (req, res) => {
    try {
        const category = await Category.findAll({
            include: [Product]
        });
        res.status(200).json(category);
    } catch (err) {
        res.status(500).json(err);
    }
});

//create category
router.post('/', async (req, res) => {
    try {
        const category = await Category.create(req.body);
        res.status(200).json(category);
    } catch (err) {
        res.status(400).json(err);
    }
});

//get by ID
router.get('/:id', async (req, res) => {
    try {
        const category = await Category.findByPk(req.params.id, {
            include: [{ model: Product }]
        });
        if (!category) {
            res.status(404).json({ message: 'No Category found with this id!' });
            return;
        }
        res.status(200).json(category);
    } catch (err) {
        res.status(500).json(err);
    }
});

//delete by ID
router.delete('/:id', async (req, res) => {
    try {
        const category = await Category.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!category) {
            res.status(404).json({ message: 'No Category found with this id!' });
            return;
        }

        res.status(200).json(category);
    } catch (err) {
        res.status(500).json(err);
    }
});

//update by ID
router.put('/:id', async (req, res) => {
    try {
        const category = await Category.update(req.body, {
            where: {
                id: req.params.id
            }
        });

        if (!category) {
            res.status(404).json({ message: 'No Category found with this id!' });
            return;
        }

        res.status(200).json(category);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
