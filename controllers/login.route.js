
module.exports = app => {
  const router = require('express').Router();

  const login = require('./login.controller');

  router.post('/login', login.setToken);

  app.use('/api', router);
}

