const router = require('express').Router();
const req = require('express/lib/request');
const res = require('express/lib/response');
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, (req, res) => {
  Comment.create({...req.body, userId: req.session.userId })
    .then(newComment => {
      res.json(newComment);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;