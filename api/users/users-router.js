const express = require('express');

const {logger, validateUserId, validateUser, validatePost  } = require('../middleware/middleware');
const Users = require('../users/users-model.js');
const posts = require('../posts/posts-model.js')
// You will need `users-model.js` and `posts-model.js` both
// The middleware functions also need to be required

const router = express.Router();

router.get('/', validateUser, (req, res, next) => {
  // RETURN AN ARRAY WITH ALL THE USERS
  Users.find(req.query) 
  .then(user => {
    res.status(200).json(user);
  })
   .catch(err => {
            next(err);
   });
  
});

router.get('/:id', validateUserId, (req, res, next) => {
  // RETURN THE USER OBJECT
  // this needs a middleware to verify user id
    res.json(req.user);
});

router.post('/', validatePost, (req, res, next) => {
  // RETURN THE NEWLY CREATED USER OBJECT
  // this needs a middleware to check that the request body is valid

});

router.put('/:id', (req, res) => {
  // RETURN THE FRESHLY UPDATED USER OBJECT
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

router.delete('/:id', (req, res) => {
  // RETURN THE FRESHLY DELETED USER OBJECT
  // this needs a middleware to verify user id
});

router.get('/:id/posts', (req, res) => {
  // RETURN THE ARRAY OF USER POSTS
  // this needs a middleware to verify user id
});

router.post('/:id/posts', (req, res) => {
  // RETURN THE NEWLY CREATED USER POST
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

// do not forget to export the router
