var User = require('../models/user.js');

export.getUsers = (req, res, next) => {
  User.find((err, users) => {
  if (err) {
    next(new Error(err));
  }
  else {
    res.status(200).send(users);
  }
  });
};