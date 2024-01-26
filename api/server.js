
// remember express by default cannot parse JSON in request bodies

// global middlewares and the user's router need to be connected here
// function customMorgan(req, res, next) {
//        next()
// }


const express = require('express');
const helmet = require('helmet');

const usersRouter = require('../users/users-router.js');
const postsRouter = require('../posts/posts-router.js');
const { logger } = require('../middleware/middleware.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/users', logger, usersRouter);
server.use('/api/posts', logger, postsRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;