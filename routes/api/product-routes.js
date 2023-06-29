const router = require('express').Router();
const { Product, Category, Tag } = require('../../models');




router.get('/', async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const products = await Product.create(req.body);
        res.status(200).json(products);
    } catch (err) {
        res.status(400).json(err);
    }
});


router.get('/:id', async (req, res) => {
    try {
        const products = await Product.findByPk(req.params.id, {
            include: [{ model: Category }, { model: Tag }]
        });
        if (!products) {
            res.status(404).json({ message: 'No Products found with this id!' });
            return;
        }
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json(err);
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const products = await Product.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!products) {
            res.status(404).json({ message: 'No Products found with this id!' });
            return;
        }

        res.status(200).json(products);
    } catch (err) {
        res.status(500).json(err);
    }
});


router.put('/:id', async (req, res) => {
    try {
        const products = await Product.update(req.body, {
            where: {
                id: req.params.id
            }
        });

        if (!products) {
            res.status(404).json({ message: 'No Products found with this id!' });
            return;
        }

        res.status(200).json(products);
    } catch (err) {
        res.status(500).json(err);
    }
});























module.exports = router;
