const router = require('express').Router();
const sequelize = require('../../config/connection');
const User = require('../../model/User');

router.get('/', async (req, res) => {
    try{
        const userData = await User.findAll(
            {
                attributes: {exclude: ['password']}
            }
        );
        res.json({message: 'Getting all data!'});
        res.json(userData);
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/:id', async (req, res) => {
    try{
        const userData = await User.findOne(
            {
                attributes: {exclude: ['password']},
                where: req.params
            }
        );
        res.json({message: 'Find by ID!'});
        res.json(userData);
    } catch (err) {
        res.status(500).json(err)
    }
});

router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        res.json({message: 'New user data!'})
        res.json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/login', async (req, res) => {
    try{
        const userData = await User.findOne(
            {
                where: {
                    email: req.body.email
                }
            }
        );
        res.json({message: 'Found user info!'});
        res.json(userData);
    } catch (err){
        res.status(500).json(err);
    }
});

router.post('/logout', async (req, res) =>{
    try {
        if (req.session.loggedIn) {
            req.session.destroy(() => {
              res.status(204).end();
            });
          }
          else {
            res.status(404).end();
          }
    } catch (err) {
        res.status(500).json(err)
    }
});

router.put('/:id', async (req, res) => {
    try{
        res.json({message: 'Updated!'});
    } catch (err) {
        res.status(500).json(err)
    }
});

router.delete('/:id', async (req, res) => {
    try{
        const userData = await User.destroy({
            where: req.params
        });
        res.json({message: 'Deleted!'});\
        res.json(userData);
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;