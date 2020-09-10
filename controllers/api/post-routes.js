const router = require('express').Router();
const sequelize = require('../../config/connection');

router.get('/', async (req, res) => {
    res.json({message: 'All data!'});
});

router.post('/', async (req, res) => {
    res.json({message: 'New data!'});
});

router.put('/', async (req, res) => {
    res.json({message: 'Updated!'});
});

router.delete('/:id', async (req, res) => {
    res.json({message: 'Deleted!'});
});

module.exports = router;