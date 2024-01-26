const Users = require('../users/users-model');

function logger(req, res, next) {
  // DO YOUR MAGIC
  console.log(
    `[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get(
      'Origin'
    )}`
  );

  next();
}


  // DO YOUR MAGIC
  async function validateUserId(req, res, next) {
    try {
        const user = await Users.findById(req.params.id);
        if (user) {
            req.user = user;
            next();
        } else {
            next({ status: 404, message: "user not found" });
        }
    } catch (err) {
        next(err);
    }
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC    //validateUser validates the body on a request to create or update a user
  const { name } = req.body;
  if (!name) {  //check if the body has a name
      return res.status(400).json({ message: "missing required name field" });
  }
  next();
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC  
   //validatePost validates the body on a request to create a new post
// if the request body lacks the required text field, respond with status 400
      const { text} = req.body;
      if (!text) {
        return next({ status: 400, message: "missing required text field" });
    }
    next();
}

// do not forget to expose these functions to other modules
module.exports = {
  validateUserId,
  validateUser,
  validatePost,
  
}