const router = require('express').Router();
const sequelize = require('../../config/connection');
const {User} = require('../../model');

router.get('/', async (req, res) => {
    try{
        const userData = await User.findAll(
            {
                attributes: {
                    exclude: ['password']
                }
            }
        );
        res.json(userData);
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/:id', async (req, res) => {
    try{
        const userData = await User.findOne(
            {
                attributes: {
                    exclude: ['password']
                },
                where: req.params
            }
        );
        res.json(userData);
    } catch (err) {
        res.status(500).json(err)
    }
});

router.post('/', async (req, res) => {
    try {
        const userData = await User.create(
            {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            }
        );
        const { id, username } = userData;
        req.session.user_id = id;
        req.session.username = username;
        req.session.loggedIn = true;
        req.session.save(() => {
            res.json(
                {
                    user: userData,
                    message: 'You are now logged in!'
                }
            );
       });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/login', async (req, res) => {
    try{
        // Find the user in the DB
        const userData = await User.findOne(
            {
                where: {
                    username: req.body.username
                }
            }
        );
        // If not in DB the notify user
        if (!userData) {
            res.status(400).json(
                {
                    message: 'No user account found!'
                }
            );
            return;
        }

         const validPassword = userData.checkPassword(req.body.password);

         if (!validPassword) {
           res.status(400).json({ message: "Incorrect password!" });
           return;
         }

        req.session.user_id = userData.id;
        req.session.username = userData.username;
        req.session.loggedIn = true;
        // If user found then save info into session cookie and set user to loggedIn
        req.session.save(() => {});
        res.status(200).json(userData);
    } catch (err){
        console.log(err)
        res.status(500).json(err);
    }
});

router.post('/logout', (req, res) =>{
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
        }
        else {
        res.status(404).end();
        }
});

router.put('/:id', async (req, res) => {
    try{
        // Find User To Update In DB
        const userData = await User.update(
            req.body,
            {
                individualHooks: true,
                where: {
                    id: req.params.id
                }
            }
        );
        // If User Not Found
        if (!userData) {
            // Notify
            res.status(404).json({ message: 'No user found with this id' });
            return;
        } else {
            // Else Print User Data
            res.json(userData);
        }
    } catch (err) {
        res.status(500).json(err)
    }
});

router.delete('/:id', async (req, res) => {
    try{
        // Find User To Delete From DB
        const userData = await User.destroy({
            where: req.params
        });

        if (!userData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        } else {
            res.json(userData);
        }
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;