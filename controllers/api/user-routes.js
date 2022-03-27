const router = require('express').Router();
const { User } = require('../../models');

router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    })
    .then(dbUserData => {
        req.session.save(() =>{
            req.session.userId = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.json(dbUserData);
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

router.post('/login', (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({ message: 'User account not found!'});
            return;
        }
        const pwValidate = dbUserData.checkPassword(req.body.password);

        if (!pwValidate) {
            res.status(400).json({ message: 'Wrong password!'});
            return;
        }
        req.session.save(() => {
            req.session.userId = dbUserData.id;
            req.session.username = dbUseerData.username;
            req.session.loggedIn = true;

            res.json({ user: dbUserData, message: 'You aare now logged in.'});
        });
    });
});

router.post('/logout', (req, res) => {
    if (!req.session.loggedIn) {
            res.status(404).end();
    }
    req.session.destroy(() => {
        res.status(202).end();
    })
});

router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No users with this ID have been found.'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;