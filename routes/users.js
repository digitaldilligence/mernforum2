var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {id:0, username:"admin", password: "root"},
    {id: 1, username: "somebody", password: "password1"},
    {id: 2, username:"somebody_else", password: "password2"}
  ]);
});

module.exports = router;
