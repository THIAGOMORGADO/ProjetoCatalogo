const express = require('express');

const route = express.Router();

route.get('/', (req, res) => {
  return res.json({
    messager: 'Hello World'
  })
})
module.exports = route;